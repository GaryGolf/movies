import * as React from 'react';
import { Dispatch, bindActionCreators } from 'redux';
import { AppStore, PopularMoviesStore, fetchPopularMovies } from 'store';
import Movie from './movies';

const { connect } = require('react-redux');

interface Store {
  popular: PopularMoviesStore;
}

interface Actions {
  actions: {
    fetchPopularMovies: (page?: number) => void;
  }
}

@connect(
  (state:AppStore) => ({
    popular: state.popular
  }), 
  dispatch => ({
    actions: bindActionCreators({ fetchPopularMovies }, dispatch)
  })
)
export default class HomePage extends React.Component<Store & Actions, {}> {

  static fetchData({ dispatch, params = {}, query = {}}) {
    dispatch(fetchPopularMovies());
  }
      
  async componentDidMount(){
    const { popular, actions } = this.props;
    if (!popular) actions.fetchPopularMovies()
  }

  render() {
    const { popular, actions } = this.props;

    if (!popular) return <p>loading...</p>;
    return (
      <div> 
        <Movie.List 
          movies={popular.results}
          onScrollBottom={actions.fetchPopularMovies}
        />
      </div>
    )
  }
}
