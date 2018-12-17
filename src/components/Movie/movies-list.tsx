import * as React from 'react';
import { ListItem } from './list-item';
import { PopularDataResult } from '../../store/api';

import * as styles from './movies-list.css';

interface Props {
  movies: PopularDataResult[];
};

export class List extends React.PureComponent<Props, {}> {

  render() {
    
    const items = this.props.movies.map(item => <ListItem key={item.id} item={item}/>);

    return <ul className={styles.moviesList}> {items} </ul>
  }
}