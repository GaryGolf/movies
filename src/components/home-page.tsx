import * as React from 'react';
import { Dispatch } from 'redux';
import { fetchPopularMovies } from 'store';
import AppStore, { PopularMoviesStore } from '../store/definitions';
import Movie from './Movie';

const { connect } = require('react-redux');

interface Store {
  popular: PopularMoviesStore;
  dispatch: Dispatch;
}

@connect(
  (state:AppStore) => ({
    popular: state.popular
  })
)
export default class HomePage extends React.Component<Store, {}> {

  static fetchData({ dispatch, params = {}, query = {}}) {
    dispatch(fetchPopularMovies());
  }
      
  componentDidMount(){
    const { dispatch } = this.props;
    HomePage.fetchData({ dispatch });
  }

  render() {
    const { popular } = this.props;

    return (
      <div> 
        <Movie.List movies={popular}/>
      </div>
    )
  }
}
