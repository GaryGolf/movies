import * as React from 'react';
import HomePage from './components/home-page';
import { Switch, Route } from 'react-router-dom';

export const routes = (
  <Switch>
    <Route exact path="/" component={HomePage}/>
  </Switch>
);