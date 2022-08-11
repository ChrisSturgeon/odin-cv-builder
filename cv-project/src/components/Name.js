import React, { Component } from 'react';
import '../styles/Name.css';

class Name extends Component {
  constructor() {
    super();

    this.clickEdit = this.clickEdit.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.saveEdit = this.saveEdit.bind(this);
    this.cancelEdit = this.cancelEdit.bind(this);

    this.state = {
      name: 'Chris Sturgeon',
      tempName: 'Chris Sturgeon',
      editing: false,
    };
  }

  clickEdit() {
    this.setState({ editing: true });
  }

  handleChange(event) {
    this.setState({
      tempName: event.target.value,
    });
  }

  saveEdit(event) {
    event.preventDefault();
    console.log('test');
    this.setState({
      name: this.state.tempName,
      editing: false,
    });
  }

  cancelEdit(event) {
    event.preventDefault();
    this.setState({
      name: this.state.name,
      editing: false,
    });
  }

  render() {
    if (this.state.editing === true) {
      return (
        <form className="header" onSubmit={this.saveEdit}>
          <input
            onChange={this.handleChange}
            className="Name"
            defaultValue={this.state.name}
            type="text"
            autoFocus
          ></input>
          <button className="save-btn" type="submit">
            <i class="fa-solid fa-circle-check"></i>
          </button>
          <button className="cancel-btn" onClick={this.cancelEdit}>
            <i class="fa-solid fa-trash-can"></i>
          </button>
        </form>
      );
    } else {
      return (
        <div className="header">
          <h1 className="Name" onDoubleClick={this.clickEdit}>
            {this.state.name}
          </h1>
        </div>
      );
    }
  }
}

export default Name;
