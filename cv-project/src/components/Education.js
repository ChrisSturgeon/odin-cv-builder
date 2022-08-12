import React, { Component } from 'react';
import uniqid from 'uniqid';

class Education extends Component {
  constructor() {
    super();

    this.handleChange = this.handleChange.bind(this);
    this.saveEdit = this.saveEdit.bind(this);
    this.addNew = this.addNew.bind(this);

    this.state = {
      history: [
        {
          name: 'Mars U',
          tempName: 'Mars U',
          level: 'Undergrad',
          tempLevel: 'Undergrad',
          from: '2019',
          tempFrom: '2019',
          to: '2022',
          tempTo: '2022',
          grade: 'distinction',
          tempGrade: 'distinction',
          editing: false,
          id: uniqid(),
        },
      ],
    };
  }

  clickEdit = (id) => {
    const index = this.state.history.findIndex((element) => {
      return element.id === id;
    });

    const revisedHistory = this.state.history;
    revisedHistory[index].editing = true;

    this.setState({
      history: revisedHistory,
    });
  };

  handleChange(id, event) {
    const index = this.state.history.findIndex((element) => {
      return element.id === id;
    });

    const revisedHistory = this.state.history;
    const name = event.target.name;

    // if (name === 'level') {
    //   revisedHistory[index].tempLevel = event.target.value;
    // }

    // console.log(revisedHistory);

    switch (name) {
      case 'name':
        revisedHistory[index].tempName = event.target.value;
        console.log(revisedHistory[index].tempName);
        break;
      case 'level':
        revisedHistory[index].tempLevel = event.target.value;
        console.log(revisedHistory[index].tempLevel);
        break;
      case 'from':
        revisedHistory[index].tempFrom = event.target.value;
        break;
      case 'to':
        revisedHistory[index].tempTo = event.target.value;
        break;
      case 'grade':
        revisedHistory[index].tempGrade = event.target.value;
        break;
      default:
        console.log('Something has gone wrong....');
    }

    this.setState({
      history: revisedHistory,
    });
  }

  saveEdit(id, event) {
    event.preventDefault();
    const index = this.state.history.findIndex((element) => {
      return element.id === id;
    });

    const revisedHistory = this.state.history;

    revisedHistory[index].name = this.state.history[index].tempName;
    revisedHistory[index].level = this.state.history[index].tempLevel;
    revisedHistory[index].from = this.state.history[index].tempFrom;
    revisedHistory[index].to = this.state.history[index].tempTo;
    revisedHistory[index].grade = this.state.history[index].tempGrade;
    revisedHistory[index].editing = false;

    this.setState({
      history: revisedHistory,
    });
  }

  addNew() {
    const template = {
      name: 'School name',
      tempName: 'School name',
      level: 'Level',
      tempLevel: 'Level',
      from: 'From',
      tempFrom: 'From',
      to: 'To',
      tempTo: 'To',
      grade: 'Grade',
      tempGrade: 'Grade',
      editing: false,
      id: uniqid(),
    };

    this.setState({
      history: this.state.history.concat(template),
    });
  }

  render() {
    return (
      <div className="schools">
        <h3>Education</h3>
        <ul>
          {this.state.history.map((school) => {
            if (school.editing === true) {
              return (
                <form
                  className="education-form"
                  key={school.id}
                  onSubmit={this.saveEdit.bind(this, school.id)}
                >
                  <input
                    name="name"
                    onChange={this.handleChange.bind(this, school.id)}
                    defaultValue={school.name}
                  ></input>
                  <input
                    name="level"
                    onChange={this.handleChange.bind(this, school.id)}
                    defaultValue={school.level}
                  ></input>
                  <input
                    name="from"
                    onChange={this.handleChange.bind(this, school.id)}
                    defaultValue={school.from}
                  ></input>
                  <input
                    name="to"
                    onChange={this.handleChange.bind(this, school.id)}
                    defaultValue={school.to}
                  ></input>
                  <input
                    name="grade"
                    onChange={this.handleChange.bind(this, school.id)}
                    defaultValue={school.grade}
                  ></input>
                  <button className="save-btn" type="submit">
                    <i className="fa-solid fa-circle-check"></i>
                  </button>
                  <button className="cancel-btn" onClick={this.cancelEdit}>
                    <i className="fa-solid fa-trash-can"></i>
                  </button>
                </form>
              );
            } else {
              return (
                <div
                  key={school.id}
                  onDoubleClick={() => this.clickEdit(school.id)}
                >
                  <div>{school.name}</div>
                  <div>{school.level}</div>
                  <div>
                    <div>
                      {school.from} - {school.to}
                    </div>
                  </div>
                  <div>{school.grade}</div>
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

export default Education;
