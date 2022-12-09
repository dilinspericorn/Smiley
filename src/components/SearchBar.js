import React, { Component } from 'react';

export class SearchBar extends Component {
  state = {
    input: "",
  };

  onInputChange = (e) => {
    this.setState({
      input: e.target.value,
    });
  };

  onFormSubmit = (e) => {
    e.preventDefault();
    this.props.onSubmit(this.state.input);
    this.setState({
        input: "",
      });
  };

  onClear=()=>{
    this.setState({
        input: "",
      });
  }

  render() {
    return (
      <form onSubmit={this.onFormSubmit}>
          <div className="form-group d-flex">
            <input
              type="text"
              className="form-control input"
              placeholder="Search For Emoji"
              onChange={this.onInputChange}
              value={this.state.input}
            />
            <div className="buttons">
              <button className='btn btn-primary' type='submit'>Search</button>
              <button className='btn btn-danger' onClick={this.onClear}>Clear</button>
            </div>
          </div>
      </form>
    );
  }
}

export default SearchBar;
