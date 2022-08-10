import React, { Component } from 'react';
import uniqid from 'uniqid';

class Contact extends Component {
  constructor() {
    super();

    this.clickEdit = this.clickEdit.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.saveChange = this.saveChange.bind(this);

    this.state = {
      comTypes: [
        {
          type: 'Tel',
          text: '07713821900',
          tempText: '07713821900',
          editing: false,
          id: uniqid(),
        },
        {
          type: 'email',
          text: 'sturgeon.chris@gmail.com',
          tempText: 'sturgeon.chris@gmail.com',
          editing: false,
          id: uniqid(),
        },
        {
          type: 'website',
          text: 'www.google.com',
          tempText: 'www.google.com',
          editing: false,
          id: uniqid(),
        },
        {
          type: 'location',
          text: 'Hampshire, UK',
          tempText: 'Hampshire, UK',
          editing: false,
          id: uniqid(),
        },
      ],
    };
  }

  clickEdit = (id) => {
    const index = this.state.comTypes.findIndex((element) => {
      return element.id === id;
    });

    const revisedComTypes = this.state.comTypes;
    revisedComTypes[index].editing = true;

    this.setState({
      comTypes: revisedComTypes,
    });
  };

  handleChange(id, event) {
    const index = this.state.comTypes.findIndex((element) => {
      return element.id === id;
    });

    const revisedComTypes = this.state.comTypes;
    revisedComTypes[index].tempText = event.target.value;

    this.setState({
      comTypes: revisedComTypes,
    });
  }

  saveChange(id, event) {
    event.preventDefault();

    const index = this.state.comTypes.findIndex((element) => {
      return element.id === id;
    });

    console.log(index);

    const revisedComTypes = this.state.comTypes;
    revisedComTypes[index].text = this.state.comTypes[index].tempText;
    revisedComTypes[index].editing = false;

    console.log(revisedComTypes[index].text);

    this.setState({
      comTypes: revisedComTypes,
    });

    console.log(this.state.comTypes);
  }

  render() {
    const startEdit = this.clickEdit;
    const makeChange = this.handleChange;
    const setEdit = this.saveChange;

    return (
      <ul>
        {this.state.comTypes.map(function (type) {
          if (type.editing === true) {
            return (
              <form
                className="NameBar"
                onSubmit={setEdit.bind(this, type.id)}
                key={type.id}
              >
                <input
                  onChange={makeChange.bind(this, type.id)}
                  defaultValue={type.text}
                ></input>
                <button type="submit">Save</button>
                <button>Cancel</button>
              </form>
            );
          } else {
            return (
              <div key={type.id}>
                <p onDoubleClick={() => startEdit(type.id)}>{type.text}</p>
              </div>
            );
          }
        })}
      </ul>
    );
  }
}

export default Contact;
