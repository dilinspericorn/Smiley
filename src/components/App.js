import React, { Component } from 'react';
import SearchBar from './SearchBar';
import DisplayEmoji from './DisplayEmoji';

export class App extends Component {
  state = {
    input: null,
  };

  onSubmit = (e) => {
    this.setState({
        input: e,
    })
  };

  render() {
    return (
      <div>
        <SearchBar onSubmit={this.onSubmit} />
        <DisplayEmoji input={this.state.input}/>
      </div>
    );
  }
}

export default App;
