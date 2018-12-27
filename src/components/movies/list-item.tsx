import * as React from 'react';
import { Link } from 'react-router-dom';
import { PopularMovie } from 'store/popular-movies/definition';
import * as styles from './list-item.scss'

interface Props {
  item: PopularMovie;
};

export class ListItem extends React.PureComponent<Props, {}> {



  render() {
    const { id, title, poster_path } = this.props.item;
    return (
      <Link className={styles.listLink} to={`/details/${id}`}>
        <li className={styles.listItem}>
          <h3> {title} </h3>
          <img className={styles.poster} src={'https://image.tmdb.org/t/p/w185/' + poster_path}/>
        </li>
      </Link>
    )
  }
}
