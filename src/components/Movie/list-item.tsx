import * as React from 'react';
import { PopularDataResult } from '../../api';

import * as styles from './list-item.css'

interface Props {
  item: PopularDataResult;
};

export class ListItem extends React.PureComponent<Props, {}> {

  render() {
    return <li className={styles.listItem}>{this.props.item.title}</li>
  }
}