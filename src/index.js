import React from 'react'
import { render } from  'react-dom'
import { Provider } from 'react-redux'
import configureStore from './store/configureStore'
import Root from './root'

const store = configureStore()

render(
  <Provider store={store}>
    <Root />
  </Provider>,
  document.getElementById('root')
)

if (process.env.NODE_ENV !== 'production') {
  const showDevTools = require('./showDevTools').default
  showDevTools(store)
}

