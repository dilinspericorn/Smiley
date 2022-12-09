import React, { Component } from 'react';

export class SearchBar extends Component {
  state = {
    input: '',
  };

  onInputChange = (e) => {
    this.setState({
      input: e.target.value,
    });
    // console.log(e.target.value);
  };

  onFormSubmit = (e) => {
    e.preventDefault();
    this.props.onSubmit(this.state.input);
    this.setState({
        input: "",
      });

  };

  render() {
    return (
      <form onSubmit={this.onFormSubmit}>
        <div className="form-group">
          <input
            type="text"
            className="form-control"
            placeholder="Search For Emoji"
            onChange={this.onInputChange}
          />
        </div>
        {/* <div>
            <buttons></buttons>
            <buttons
        </div> */}
      </form>
    );
  }
}

export default SearchBar;
