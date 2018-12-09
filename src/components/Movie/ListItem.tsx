import * as React from 'react';
import { PopularDataResult } from '../../api';

interface Props {
  item: PopularDataResult;
};

export class ListItem extends React.PureComponent<Props, {}> {

  render() {
    return <li>{this.props.item.title}</li>
  }
}