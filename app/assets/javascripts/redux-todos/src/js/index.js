import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { Router, hashHistory } from 'react-router'

import routes from './routes'
import configureStore from './configureStore'
import { fetchTodos } from './actions'

const initialStoreState = {}

let store = configureStore(initialStoreState);
window.store = store; // for debugging only

store.dispatch(fetchTodos()); // initial data load;

render(
  <Provider store={store}>
    <Router history={hashHistory}>
      {routes}
    </Router>
  </Provider>,
  document.getElementById('root')
);

