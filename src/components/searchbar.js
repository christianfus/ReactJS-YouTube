import React, { Component } from 'react';

export class SearchBar extends Component {
  constructor(props) {
    super(props);
    this.state = { term: 'sex' };
  }
  render() {
    return (
      <div>
        <input value={this.state.term} onChange={(event) => this.setState({ term: event.target.value })} />
      </div>
    );
  }
}
