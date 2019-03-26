import * as React from 'react';
import { Dispatch, bindActionCreators } from 'redux';
import { AppStore, PopularMoviesStore, 
  fetchPopularMovies, searchPopularMovies, searchMoviesKeyword } from 'store';
import Movie from './movies';

const { connect } = require('react-redux');

interface Store {
  popular: PopularMoviesStore;
}

interface Actions {
  actions: {
    fetchPopularMovies: (page?: number) => void;
    searchPopularMovies: (query: string) => void;
    searchMoviesKeyword: (query: string) => void;
  }
}

@connect(
  (state:AppStore) => ({
    popular: state.popular
  }), 
  dispatch => ({
    actions: bindActionCreators({ fetchPopularMovies, searchPopularMovies, searchMoviesKeyword }, dispatch)
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

  private handleSearch(query:string) {
    // this.props.actions.searchPopularMovies(query)
    this.props.actions.searchMoviesKeyword(query);
  }

  render() {
    const { popular, actions } = this.props;

    if (!popular) return <p>loading...</p>;
    return (
      <div> 
        <Movie.Search onInput={this.handleSearch.bind(this)}/>
        <Movie.List 
          movies={popular.results}
          onScrollBottom={actions.fetchPopularMovies}
        />
      </div>
    )
  }
}
