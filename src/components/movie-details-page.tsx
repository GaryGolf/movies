import * as React from 'react';
import { RouteComponentProps } from 'react-router-dom';
import api, { MovieDetails } from '../api';

interface Params {
  id: string;
}
type Props = RouteComponentProps<Params>;
interface State {
  details: MovieDetails;
}
export default class MovieDetailsPage extends React.Component<Props, State> {

  constructor(props:Props) {
    super(props);
    this.state = { details: null };
  }
      
  componentDidMount(){
    const { id } = this.props.match.params;
    api.getDetails(id).then(result => this.setState({ details: result.data }));
  }

  render() {

    const { details } = this.state;
    if (!details) return null;
    return (
      <div> 
        <h2>{details.title}</h2>
      </div>
    )
  }
}
