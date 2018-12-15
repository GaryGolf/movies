import * as React from 'react';
import api, { PopularDataResult } from '../api';
import Movie from './Movie';
import { RouteComponentProps } from 'react-router-dom'
interface Params {
  id: string;
}
type Props = RouteComponentProps<Params>;
interface State {
  // movies: PopularDataResult[];
}
export default class MovieDetailsPage extends React.Component<Props, State> {

  constructor(props:Props) {
        super(props);
        this.state = {};
      }
      
  componentDidMount(){
    // api.getPopular().then(result => this.setState({ movies: result.data.results }));
    console.log('id: ', this.props.match.params.id);
  }

  render() {
    return (
      <div> 
        Details
      </div>
    )
  }
}
