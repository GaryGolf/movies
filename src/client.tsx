import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import { routes } from './routes';

const app = (
  <Router>
    {routes}
  </Router>
)

ReactDOM.render(app, document.getElementById('app'));
