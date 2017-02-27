import React from 'react'
import { render } from 'react-dom'
import { createStore, compose, applyMiddleware } from 'redux'
import thunk from 'redux-thunk';
import { Provider } from 'react-redux'
import App from './containers/App'
import usersApp from './reducers/index'

// here is our redux-store
const store = createStore(usersApp,
    compose(applyMiddleware(thunk))
);
let rootElement = document.getElementById('root')

render(
  <Provider store={store}>
    <App />
  </Provider>,
  rootElement
)