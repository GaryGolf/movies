import * as React from 'react';
import api, { PopularDataResult } from '../store/api';
import Movie from './Movie';
// import * as actions from '../store/actions';

interface Props {};
interface State {
  movies: PopularDataResult[];
}
export default class HomePage extends React.Component<Props, State> {

  constructor(props:Props) {
        super(props);
        this.state = { movies: []};
      }
  
  static loadData() {

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
