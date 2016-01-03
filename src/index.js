import React from 'react'
import { render } from  'react-dom'
import { Provider } from 'react-redux'
import { Router, Route, IndexRoute } from 'react-router'
import configureStore from './store/configureStore'
import createHashHistory from 'history/lib/createHashHistory'
import App from './containers/App'
import Home from './components/Home'
import NotFound from './components/NotFound'
import Test from './components/Test'
import Single from './components/Single'

const store = configureStore()
const history = createHashHistory()

const routes = (
  <Router history={history}>
    <Route path="/" component={App}>
      <IndexRoute component={Home} />
      <Route path="test" component={Test} />
      <Route path="post" component={Single} >
        <Route path="/post/:postId" component={Single} />
      </Route>
    </Route>
    <Route path="*" component={NotFound} />

  </Router>
)

render(
  <Provider store={store}>
    {routes}
  </Provider>,
  document.getElementById('app')
)

if (process.env.NODE_ENV !== 'production') {
  const showDevTools = require('./showDevTools').default
  showDevTools(store)
}
