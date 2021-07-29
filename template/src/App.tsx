import React from 'react'
import { BrowserRouter as Router } from 'react-router-dom'

import GlobalStyle from './styles/global'

import { Routes } from './routes'

const App = (): JSX.Element => (
  <Router>
    <Routes />
    <GlobalStyle />
  </Router>
)

export default App
