import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import { routes } from './routes';
import { configureStore } from './store/config';

const api = {};
const state = window.__PRELOADED_STATE__ || {};
const store = configureStore(state, api);
const app = (
  <Provider store={store}>
    <Router>
      {routes}
    </Router>
  </Provider>
)

ReactDOM.render(app, document.getElementById('app'));
