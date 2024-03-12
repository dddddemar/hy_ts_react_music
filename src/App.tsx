import React, { Suspense } from 'react'
import './App.css'
//router
import { useRoutes } from 'react-router-dom'
import routes from './router'

import AppHeader from './components/app-header'
import AppFooter from './components/app-footer'
//router
function App() {
  return (
    <div className="App">
      <div className="nav">
        <AppHeader></AppHeader>
      </div>
      <Suspense fallback="loading...">
        <div className="main">{useRoutes(routes)}</div>
      </Suspense>
      <div className="footer">
        <AppFooter></AppFooter>
      </div>
    </div>
  )
}

export default App
