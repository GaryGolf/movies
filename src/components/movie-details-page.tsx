import * as React from 'react';
import { Dispatch, bindActionCreators } from 'redux';
import { RouteComponentProps } from 'react-router-dom';
import { AppStore, MovieDetailsStore, fetchMovieDetails } from 'store';

const { connect } = require('react-redux');

interface Params {
  id: string;
}
interface Store {
  details: MovieDetailsStore;
}
type Router = RouteComponentProps<Params>;

interface Actions {
  actions: {
    fetchMovieDetails: (id:string) => void;
  }
}

@connect(
  (state:AppStore) => ({
    details: state.details
  }),
  (dispatch:Dispatch) => ({
    actions: bindActionCreators({ fetchMovieDetails }, dispatch)
  })
)
export default class MovieDetailsPage extends React.Component<Store & Router & Actions, {}> {

  static fetchData({ dispatch, params = { id: null }, query = {}}) {
    dispatch(fetchMovieDetails(params.id))
  }
      
  componentDidMount(){
    const { actions, match } = this.props;
    const { id } = match.params;
    actions.fetchMovieDetails(id)
  }

  render() {

    const { details } = this.props;
    if (!details) return <p>loading...</p>;
    
    return (
      <div> 
        <h2>{details.title}</h2>
      </div>
    )
  }
}
