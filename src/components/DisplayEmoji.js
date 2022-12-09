import React, { Component } from 'react';
import Emoji from './Emoji';

export class DisplayEmoji extends Component {
  render() {
    console.log(this.props.input);
    // let filter=Emoji.filter((data)=>console.log(data.keywords.split(" ").includes(this.props.input)))

    let Emojis =
      this.props.input === null
        ? Emoji
        : Emoji.filter((data) =>
            // console.log(data.keywords.split(' ').includes(this.props.input))
            data.keywords.split(' ').includes(this.props.input.toLowerCase())

          );
    Emojis = Emojis.map((data, index) => {
      return (
        <div key={index} className="d-flex">
          {data.symbol}
        </div>
      );
    });

    return <div>{Emojis}</div>;
  }
}

export default DisplayEmoji;
