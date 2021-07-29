import React from 'react'
import { Switch } from 'react-router-dom'

import { Route } from './Route'

import { Home, About } from 'pages'

export const Routes = (): JSX.Element => (
  <Switch>
    <Route path="/" exact component={Home} />
    <Route path="/about" component={About} />
  </Switch>
)
