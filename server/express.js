import express from 'express'
import bodyParser, { urlencoded } from 'body-parser'
import cookieParser from 'cookie-parser'
import compression from 'compression'
import helmet from 'helmet'
import cors from 'cors'
import template from './../template'
import userRoutes from './routes/user.routes'
import authRoutes from './routes/auth.routes'
import path from 'path'

// for server-side rendering-- react modules
import React from 'react'
import ReactDOMServer from 'react-dom/server'
import StaticRouter from 'react-router-dom/StaticRouter'
import MainRouter from './../client/MainRouter'
import JssProvider from 'react-jss/lib/JssProvider'
import {MuiThemeProvider, createMuiTheme, createGenerateClassName} from 'material-ui/styles'
import {SheetsRegistry} from 'react-jss/lib/jss'
import {indigo, pink} from 'material-ui/colors'

//only during development
import devBundle from './devBundle'

const CURRENT_WORKING_DIR = process.cwd();

const app = express();

// only during development
devBundle.compile(app)

// configure express
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}))
app.use(cookieParser())
app.use(compression())
app.use(helmet())
app.use(cors())

app.use('/dist', express.static(path.join(CURRENT_WORKING_DIR, 'dist')))

//mount routes
app.use('/', userRoutes)
app.use('/', authRoutes)

app.get('*', (req, res) => {
    //generating CSS and markup
    const sheetsRegistry = new SheetsRegistry()
    const context = {}
    const generateClassName = createGenerateClassName()
    const theme = createMuiTheme({
        palette: {
            primary: {
            light: '#757de8',
            main: '#3f51b5',
            dark: '#002984',
            contrastText: '#fff',
          },
          secondary: {
            light: '#ff79b0',
            main: '#ff4081',
            dark: '#c60055',
            contrastText: '#000',
          },
            openTitle: indigo['400'],
            protectedTitle: pink['400'],
            type: 'light'
          },
    })
    const markup = ReactDOMServer.renderToString(
            <StaticRouter location={req.url} context={context}>
                <JssProvider registry={sheetsRegistry} generateClassName={generateClassName}>
                <MuiThemeProvider theme={theme} sheetsManager={new Map()}>
                    <MainRouter />
                    </MuiThemeProvider>
                    </JssProvider>
            </StaticRouter>
    )

    if(context.url){
        return res.redirect(303, context.url)
    }
    const css = sheetsRegistry.toString()
    res.status(200).send(template({
        markup: markup,
        css: css
    }))
    })

app.use((err, req, res, next) => {
    if(err.name === 'Unauthorized error'){
        res.status(401).json({"error": err.name + ": " + err.message})
    } else if(err){
        res.status(400).json({"error": err.name + ": " + err.message})
        console.log(err)
    }
})

    

export default app
