import * as React from 'react';
import debounce from 'lodash/debounce';
import * as styles from './search.scss';

interface Props {
  onInput: (query:string) => void;
}
interface State {}

export class Search extends React.PureComponent<Props, State> {

  private searchInput: React.RefObject<HTMLInputElement>;

  constructor(props:Props) {
    super(props);
    this.searchInput = React.createRef();
    this.updateSearchValue = this.updateSearchValue.bind(this);
    this.handleSearchChange = this.handleSearchChange.bind(this);
    this.updateSearchValue = debounce(this.updateSearchValue, 800);
  }
  componentDidMount() {
    this.searchInput.current.focus();
  }

  private handleSearchChange(event: React.ChangeEvent<HTMLInputElement>) {
    const { value } = event.currentTarget;
    this.updateSearchValue(value);
  }

  private updateSearchValue(value: string) {
    if (value) this.props.onInput(value);
  }

  render() {
    return (
      <div className={styles.container}> 
       Search <input ref={this.searchInput} onChange={this.handleSearchChange.bind(this)}/>
      </div>
    )
  }
}
