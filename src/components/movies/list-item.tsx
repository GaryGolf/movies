import * as React from 'react';
import { Link } from 'react-router-dom';
import { PopularMovie } from 'store/popular-movies/definition';

import * as styles from './list-item.scss'

interface Props {
  item: PopularMovie;
};

export class ListItem extends React.PureComponent<Props, {}> {

  render() {
    return (
      <Link className={styles.listLink} to={`/details/${this.props.item.id}`}>
        <li className={styles.listItem}>{this.props.item.title}</li>
      </Link>
    )
  }
}
