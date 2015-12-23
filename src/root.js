require('../assets/stylesheets/style.css')
import React, { Component } from 'react'
import { Router, Route, IndexRoute } from 'react-router'
import createHashHistory from 'history/lib/createHashHistory'
import App from './components/app'
import Home from './components/home'
import NotFound from './components/not-found'
import Test from './components/test'

const history = createHashHistory()

export default class Root extends Component {
  render() {
    return (
      <Router history={history}>
        <Route path="/" component={App}>
          <IndexRoute component={Home} />
          <Route path="test" component={Test} />
        </Route>
        <Route path="*" component={NotFound} />
      </Router>
    )
  }
}
