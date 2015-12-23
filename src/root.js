import React, { Component } from 'react'
import { Router, Route, IndexRoute } from 'react-router'
import createHashHistory from 'history/lib/createHashHistory'
import { Provider } from 'react-redux'
import App from './components/app'
import Home from './components/home'
import NotFound from './components/not-found'
import Test from './components/test'
import configureStore from './store/configureStore'
import DevTools from './DevTools'

const history = createHashHistory()
const store = configureStore()

const routes = (
	<Router history={history}>
		<Route path="/" component={App}>
			<IndexRoute component={Home} />
			<Route path="test" component={Test} />
		</Route>
		<Route path="*" component={NotFound} />
	</Router>
)

export default class Root extends Component {
  render() {
    return (
			<Provider store={store}>
				<div>
					{routes}
					<DevTools />
				</div>
			</Provider>
    )
  }
}
