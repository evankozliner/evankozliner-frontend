import '../assets/stylesheets/style.css'
import React, { Component } from 'react'
import { Router, Route } from 'react-router'
import HashHistory from 'react-router/lib/HashHistory'
import { createStore, combineReducers } from 'redux'
import { Provider } from 'react-redux'
import { App, Home } from './components'
import * as reducers from './stores'

const reducer = combineReducers(reducers)
const store = createStore(reducer)

function renderRoutes() {
  return (
    <Router history={HashHistory}>
      <Route component={App}>
        <Route name="app" path="/" component={Home} />
      </Route>
    </Router>
  )
}

export default class Root extends Component {
  render() {
    return (
      <Provider store={store}>
        {renderRoutes}
      </Provider>
    )
  }
}
