import * as React from 'react'
import * as styles from './search.scss'

interface Props {
  onInput: (query:string) => void;
}
interface State {}

export class Search extends React.PureComponent<Props, State> {

  private searchInput: React.RefObject<HTMLInputElement>;

  constructor(props:Props) {
    super(props);
    this.searchInput = React.createRef();
  }
  componentDidMount() {
    this.searchInput.current.focus();
  }

  private handleSearchChange(e) {
    const { value } = e.currentTarget;
    this.props.onInput(value);
  }

  render() {
    return (
      <div className={styles.container}> 
       Search <input ref={this.searchInput} onChange={this.handleSearchChange.bind(this)}/>
      </div>
    )
  }
}
