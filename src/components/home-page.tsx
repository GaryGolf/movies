import * as React from 'react';
import { Dispatch } from 'redux';
import api, { PopularDataResult } from '../store/api';
import { fetchPopularMovies } from '../store/actions';
import { PopularMoviesStore }  from '../store/popular-movies/types';
import AppStore from '../store/types';
import Movie from './Movie';

const { connect } = require('react-redux');

interface Props {
  popular?: PopularDataResult[];
  dispatch?: Dispatch<any>
};
@connect(
  (state:AppStore) => ({
    popular: state.popular
  })
)
export default class HomePage extends React.Component<Props, {}> {

  static fetchData({ dispatch, params = {}, query = {}}) {
    dispatch(fetchPopularMovies());
  }
      
  componentDidMount(){
    const { dispatch } = this.props;
    HomePage.fetchData({ dispatch });
  }

  render() {
    const { popular } = this.props;

    // if (!popular) return <h4>Loading</h4>;
    return (
      <div> 
        <Movie.List movies={this.props.popular}/>
      </div>
    )
  }
}
