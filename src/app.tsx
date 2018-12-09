import * as React from 'react';
import db from './api';
interface Props {

}
export default class App extends React.PureComponent<Props, {}> {
  
  componentDidMount(){
    db.getPopular()
    .then(console.log)
  }
  render(){
    return <h2>Hello MOvie db</h2>
  }
}