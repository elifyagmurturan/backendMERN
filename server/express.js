import express from 'express'
import bodyParser, { urlencoded } from 'body-parser'
import cookieParser from 'cookie-parser'
import compression from 'compression'
import helmet from 'helmet'
import cors from 'cors'
import template from '../template'
import userRoutes from './routes/user.routes'
import authRoutes from './routes/auth.routes'
//only during development
import devBundle from './devBundle'
import path from 'path'
const CURRENT_WORKING_DIR = process.cwd()

const app = express()
/**... configure express ... */

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}))
app.use(cookieParser())
app.use(compression())
app.use(cors())

app.use('/', userRoutes)
app.use('/', authRoutes)

app.use('/dist', express.static(path.join(CURRENT_WORKING_DIR, 'dist')))

app.get('/', (req, res) => {
    res.status(200).send(template())
})

app.use((err, req, res, next) => {
    if(err.name === 'Unauthorized error'){
        res.status(401).json({"error": err.name + ": " + err.message})
    } else if(err){
        res.status(400).json({"error": err.name + ": " + err.message})
        console.log(err)
    }
})

// only during development
devBundle.compile(app)

export default app
