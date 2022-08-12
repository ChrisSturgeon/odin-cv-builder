import React, { Component } from 'react';
import uniqid from 'uniqid';
import '../styles/Contact.css';

class Contact extends Component {
  constructor() {
    super();

    this.clickEdit = this.clickEdit.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.saveChange = this.saveChange.bind(this);
    this.addNew = this.addNew.bind(this);

    this.state = {
      template: {
        text: 'Type here',
        editing: false,
        id: uniqid(),
      },
      comTypes: [
        {
          icon: <i className="fa-solid fa-phone"></i>,
          text: '07713821900',
          tempText: '07713821900',
          editing: false,
          id: uniqid(),
        },
        {
          icon: <i className="fa-solid fa-envelope"></i>,
          text: 'sturgeon.chris@gmail.com',
          tempText: 'sturgeon.chris@gmail.com',
          editing: false,
          id: uniqid(),
        },
        {
          icon: <i className="fa-solid fa-globe"></i>,
          text: 'bit.ly/3pbMo6M',
          tempText: 'bit.ly/3pbMo6M',
          editing: false,
          id: uniqid(),
        },
        {
          icon: <i className="fa-solid fa-location-dot"></i>,
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

    const revisedComTypes = this.state.comTypes;
    revisedComTypes[index].text = this.state.comTypes[index].tempText;
    revisedComTypes[index].editing = false;

    this.setState({
      comTypes: revisedComTypes,
    });
  }

  addNew() {
    const template = {
      type: 'Tel',
      text: 'Type here',
      editing: false,
      id: uniqid(),
    };

    this.setState({
      comTypes: this.state.comTypes.concat(template),
    });
  }

  render() {
    const startEdit = this.clickEdit;
    const makeChange = this.handleChange;
    const setEdit = this.saveChange;

    return (
      <div className="contact-div">
        <h3>Contact Info</h3>
        <ul className="testPadding">
          {this.state.comTypes.map(function (type) {
            if (type.editing === true) {
              return (
                <form onSubmit={setEdit.bind(this, type.id)} key={type.id}>
                  <input
                    autoFocus
                    onChange={makeChange.bind(this, type.id)}
                    defaultValue={type.text}
                  ></input>
                  <button className="save-btn" type="submit">
                    <i className="fa-solid fa-circle-check"></i>
                  </button>
                  <button className="cancel-btn">
                    <i className="fa-solid fa-trash-can"></i>
                  </button>
                </form>
              );
            } else if (type.icon) {
              return (
                <div className="with-icon" key={type.id}>
                  <p>{type.icon}</p>
                  <p onDoubleClick={() => startEdit(type.id)}>{type.text}</p>
                </div>
              );
            } else {
              return (
                <div key={type.id}>
                  <p onDoubleClick={() => startEdit(type.id)}>{type.text}</p>
                </div>
              );
            }
          })}
          <button onClick={this.addNew}>
            <i className="fa-solid fa-plus"></i>
          </button>
        </ul>
      </div>
    );
  }
}

export default Contact;
