import * as React from 'react';
import { ListItem } from './ListItem'
import { PopularDataResult } from '../../api';

interface Props {
  movies: PopularDataResult[];
};

export class List extends React.PureComponent<Props, {}> {

  render() {
    
    const items = this.props.movies.map(item => <ListItem key={item.id} item={item}/>);

    return <ul> {items} </ul>
  }
}