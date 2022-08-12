import React, { Component } from 'react';

class School extends Component {
  constructor() {
    super();

    this.state = {
      editing: false,
    };
  }

  render() {
    return (
      <ul>
        <div>
          <div>{this.props.schools[0].level.text}</div>
        </div>
      </ul>
    );
  }
}

export default School;
