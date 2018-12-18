import * as React from 'react';
import { Dispatch } from 'redux';
import { RouteComponentProps } from 'react-router-dom';
import AppStore, { MovieDetailsStore } from 'store/definitions';
import { fetchMovieDetails } from 'store';

const { connect } = require('react-redux');

interface Params {
  id: string;
}
interface Store {
  details: MovieDetailsStore;
  dispatch: Dispatch;
}
type Router = RouteComponentProps<Params>;

@connect(
  (state:AppStore) => ({
    details: state.details
  })
)
export default class MovieDetailsPage extends React.Component<Store & Router, {}> {

  static fetchData({ dispatch, params = { id: null }, query = {}}) {
    dispatch(fetchMovieDetails(params.id))
  }
      
  componentDidMount(){
    const { dispatch, match: { params }} = this.props;
    MovieDetailsPage.fetchData({ dispatch, params })
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
