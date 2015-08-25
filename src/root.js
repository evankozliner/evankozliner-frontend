import '../assets/stylesheets/style.css'
import React, { Component } from 'react'
import { Router, Route } from 'react-router'
import HashHistory from 'react-router/lib/HashHistory'
import { createStore, combineReducers, compose } from 'redux'
import { devTools, persistState } from 'redux-devtools'
import { DevTools, DebugPanel, LogMonitor } from 'redux-devtools/lib/react'
import { Provider } from 'react-redux'
import { App, Home, Test } from './components'
import * as reducers from './stores'

const reducer = combineReducers(reducers)
const finalCreateStore = compose(
  devTools(),
  persistState(window.location.href.match(/[?&]debug_session=([^&]+)\b/)),
  createStore
)
const store = finalCreateStore(reducer)

function renderRoutes() {
  return (
    <Router history={HashHistory}>
      <Route component={App}>
        <Route name="app" path="/" component={Home} />
        <Route name="test" path="/test" component={Test} />
      </Route>
    </Router>
  )
}

export default class Root extends Component {
  render() {
    return (
      <div>
        <Provider store={store}>
          {renderRoutes}
        </Provider>
        { false ? <DebugPanel right top bottom >
          <DevTools store={store} monitor={LogMonitor} />
        </DebugPanel> : ''}
      </div>
    )
  }
}
