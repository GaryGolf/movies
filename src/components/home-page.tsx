import * as React from 'react';
import api, { PopularDataResult } from '../api';
import Movie from './Movie';

interface Props {};
interface State {
  movies: PopularDataResult[];
}
export default class HomePage extends React.Component<Props, State> {

  constructor(props:Props) {
        super(props);
        this.state = { movies: []};
      }
      
  componentDidMount(){
    api.getPopular().then(result => this.setState({ movies: result.data.results }));
  }

  render() {
    return (
      <div> 
        <Movie.List movies={this.state.movies}/>
      </div>
    )
  }
}
