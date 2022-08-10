import { toHaveDisplayValue } from '@testing-library/jest-dom/dist/matchers';
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
        <form onSubmit={this.saveEdit} className="NameBar">
          <input
            onChange={this.handleChange}
            className="Name"
            defaultValue={this.state.name}
            type="text"
          ></input>
          <button className="btn" type="submit">
            <i class="fa-solid fa-thumbs-up"></i>
          </button>
          <button className="btn" onClick={this.cancelEdit}>
            <i class="fa-solid fa-xmark"></i>
          </button>
        </form>
      );
    } else {
      return (
        <h1 onDoubleClick={this.clickEdit} className="Name">
          {this.state.name}
        </h1>
      );
    }
  }
}

export default Name;
