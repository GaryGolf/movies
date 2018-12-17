import * as React from 'react';
import { Link } from 'react-router-dom';
import { PopularDataResult } from '../../store/api';

import * as styles from './list-item.css'

interface Props {
  item: PopularDataResult;
};

export class ListItem extends React.PureComponent<Props, {}> {

  render() {
    return (
      <Link to={`/details/${this.props.item.id}`}>
        <li className={styles.listItem}>{this.props.item.title}</li>
      </Link>
    )
  }
}