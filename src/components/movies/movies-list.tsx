import * as React from 'react';
import Waypoint from 'react-waypoint';
import { ListItem } from './list-item';
import { PopularMovie } from 'store/popular-movies/definition'

import * as styles from './movies-list.scss';

interface Props {
    movies: PopularMovie[];
    onScrollBottom: () => void;
};

export class List extends React.PureComponent<Props, {}> {

  render() {
    const { movies, onScrollBottom } = this.props;
    const items = movies.map(item => <ListItem key={item.id} item={item}/>);

    return (
      <div className={styles.container}>
        <ul className={styles.listItem}> 
          {items} 
          <Waypoint
            scrollableAncestor={typeof window !== 'undefined' ? window : null}
            onEnter={onScrollBottom}
          />
        </ul>
      </div>
    );
  }
}
