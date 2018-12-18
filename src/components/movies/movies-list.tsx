import * as React from 'react';
import { ListItem } from './list-item';
import { PopularMoviesStore } from 'store/definitions';

import * as styles from './movies-list.css';

interface Props {
  movies: PopularMoviesStore;
};

export class List extends React.PureComponent<Props, {}> {

  render() {
    
    const items = this.props.movies.map(item => <ListItem key={item.id} item={item}/>);

    return <ul className={styles.moviesList}> {items} </ul>
  }
}