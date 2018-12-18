import * as React from 'react';
import Waypoint from 'react-waypoint';
import { ListItem } from './list-item';
import { PopularMovie } from 'store/popular-movies/definition'

import * as styles from './movies-list.css';

interface Props {
    movies: PopularMovie[];
};

export class List extends React.PureComponent<Props, {}> {

    private onEnterWaypoint() {
        console.log('waypoint')
    }

  render() {
    const items = this.props.movies.map(item => <ListItem key={item.id} item={item}/>);

    return (
      <ul className={styles.moviesList}> 
        {items} 
        <Waypoint
					scrollableAncestor={typeof window !== 'undefined' ? window : null}
					onEnter={this.onEnterWaypoint}
				/>
      </ul>
    );
  }
}