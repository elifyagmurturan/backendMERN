import React from 'react'
import MainRouter from './MainRouter'
import {BrowserRouter} from 'react-router-dom'
import {MuiThemeProvider, createMuiTheme} from 'material-ui/styles'
import {indigo, pink} from 'material-ui/colors'
import { hot } from 'react-hot-loader'
import theme from './theme'

const App = () => (
  <BrowserRouter>
    <MuiThemeProvider theme={theme}>
      <MainRouter/>
    </MuiThemeProvider>
  </BrowserRouter>
)

React.useEffect(() => {
  const jssStyles = document.querySelector('#jss-server-side')
  if(jssStyles) {
    jssStyles.parentNode.removeChild(jssStyles)
  }
}, [] )

export default hot(module)(App)