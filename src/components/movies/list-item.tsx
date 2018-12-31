import * as React from 'react';
import { Link } from 'react-router-dom';
import { PopularMovie } from 'store/popular-movies/definition';
import Lazyload from 'react-lazyload'
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

          <Lazyload height={200} offset={100} once>
            <img className={styles.poster} src={'https://image.tmdb.org/t/p/w185/' + poster_path}/>
          </Lazyload>
          <div className={styles.pane}>
            <h3> {title} </h3>
          </div>
        </li>
      </Link>
    )
  }
}
