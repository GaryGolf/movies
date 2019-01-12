import * as React from 'react'

interface Props {
  onInput: (query:string) => void;
}
interface State {}

export class Search extends React.PureComponent<Props, State> {

  private handleSearchChange(e) {
    const { value } = e.currentTarget;
    this.props.onInput(value);
  }

  render() {
    return (
      <div>
        <input onChange={this.handleSearchChange.bind(this)}/>
      </div>
    )
  }
}