import React, { Component } from 'react';
import Emoji from './Emoji';

export class DisplayEmoji extends Component {
  render() {
    let Emojis =
      this.props.input === null || this.props.input === ''
        ? Emoji
        : Emoji.filter((data) =>
            data.keywords.split(' ').includes(this.props.input.toLowerCase())
          );
    Emojis = Emojis.map((data, index) => {
      return (
        <div key={index} className="d-flex">
          {data.symbol}
        </div>
      );
    });

    return <div className="emojis">{Emojis}</div>;
  }
}

export default DisplayEmoji;
