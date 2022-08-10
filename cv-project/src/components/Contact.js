import React, { Component } from 'react';
import uniqid from 'uniqid';

class Contact extends Component {
  constructor() {
    super();

    this.testLog = this.testLog.bind(this);

    this.state = {
      comTypes: [
        {
          type: 'Tel',
          text: '07713821900',
          editing: false,
          id: uniqid(),
        },
        {
          type: 'email',
          text: 'sturgeon.chris@gmail.com',
          editing: false,
          id: uniqid(),
        },
      ],
    };
  }

  testLog = (id) => {
    console.log(id);
  };

  render() {
    const frog = this.testLog;

    return (
      <ul>
        {this.state.comTypes.map(function (type) {
          if (type.editing === true) {
            return (
              <div key={type.id}>
                <input defaultValue={type.text}></input>
              </div>
            );
          } else {
            return (
              <div key={type.id}>
                <p onClick={() => frog(type.id)}>{type.text}</p>
              </div>
            );
          }
        })}
      </ul>
    );
  }
}

export default Contact;
