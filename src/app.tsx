import * as React from 'react';
import api from './api';
import { PopularDataResult } from './api';
import Movies from './Components/Movie'

interface Props {

}
interface State {
  movies: PopularDataResult[];
}
export default class App extends React.PureComponent<Props, State> {

  constructor(props:Props) {
    super(props);
    this.state = { movies: []};
  }
  
  componentDidMount(){
    api.getPopular().then(result => this.setState({ movies: result.data.results }));
  }
  
  render(){
    return (
      <div>
        <h2>Hello MOvie db</h2>
        <Movies.List movies={this.state.movies}/>
      </div>
    )
  }
}