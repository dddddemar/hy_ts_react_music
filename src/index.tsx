import React from 'react'
//router
import ReactDOM from 'react-dom/client'
//router
import './index.css'
import App from './App'
import reportWebVitals from './reportWebVitals'
import 'normalize.css'
import './assets/css/index.less'
//router
import { HashRouter } from 'react-router-dom'
//router
//redux
import { Provider } from 'react-redux'
import store from './store'
import { ThemeProvider } from 'styled-components'
import theme from './assets/themes'
//redux

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)

root.render(
  //router
  <Provider store={store}>
    <ThemeProvider theme={theme}>
      <HashRouter>
        <App />
      </HashRouter>
    </ThemeProvider>
  </Provider>
  //rputer
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
