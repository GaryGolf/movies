import * as React from 'react';
import HomePage from './components/home-page';
import MovieDetailsPage from './components/movie-details-page';
import { Switch, Route } from 'react-router-dom';

export const routes = (
  <Switch>
    <Route exact path="/" component={HomePage}/>
    <Route path="/details/:id" component={MovieDetailsPage}/>
  </Switch>
);
