import * as React from 'react';
import * as styles from './search.scss';
import { SearchKeyword } from 'store/keywords/definitions'

interface Props {
  keyword: SearchKeyword[];
  onInput: (query:string) => void;
}
interface State {}

export class Search extends React.PureComponent<Props, State> {

  private searchInput: React.RefObject<HTMLInputElement>;

  constructor(props:Props) {
    super(props);
    this.searchInput = React.createRef();
    this.handleSearchChange = this.handleSearchChange.bind(this);
  }

  componentDidMount() {
    this.searchInput.current.focus();
  }

  private handleSearchChange(event: React.ChangeEvent<HTMLInputElement>) {
    const { value } = event.currentTarget;
    if (value) this.props.onInput(value);
  }

  render() {
    const { keyword } = this.props;
    const options = keyword.map(kw => (<option key={kw.id} value={kw.name} />));
    const datalist = options.length ? (<datalist id="keywords">{options}</datalist>) : null;

    return (
      <div className={styles.container}> 
       <input ref={this.searchInput} 
          list="keywords" 
          placeholder="Search"
          onChange={this.handleSearchChange.bind(this)}
        />
       {datalist}
      </div>
    )
  }
}
