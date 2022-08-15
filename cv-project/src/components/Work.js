import React, { Component } from 'react';
import uniqid from 'uniqid';

class Work extends Component {
  constructor() {
    super();

    this.handleChange = this.handleChange.bind(this);
    this.saveEdit = this.saveEdit.bind(this);
    this.addNew = this.addNew.bind(this);

    this.state = {
      history: [
        {
          employer: 'MI6',
          tempEmployer: 'MI6',
          position: 'Super Spy',
          tempPosition: 'Super Spy',
          from: '2010',
          tempFrom: '2010',
          to: 'present',
          tempTo: 'present',
          tasks: 'being sneaky',
          tempTasks: 'being sneaky',
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

    switch (name) {
      case 'employer':
        revisedHistory[index].tempEmployer = event.target.value;
        break;
      case 'position':
        revisedHistory[index].tempPosition = event.target.value;
        console.log(revisedHistory[index].tempLevel);
        break;
      case 'from':
        revisedHistory[index].tempFrom = event.target.value;
        break;
      case 'to':
        revisedHistory[index].tempTo = event.target.value;
        break;
      case 'tasks':
        revisedHistory[index].tempTasks = event.target.value;
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

    revisedHistory[index].employer = this.state.history[index].tempEmployer;
    revisedHistory[index].position = this.state.history[index].tempPosition;
    revisedHistory[index].from = this.state.history[index].tempFrom;
    revisedHistory[index].to = this.state.history[index].tempTo;
    revisedHistory[index].tasks = this.state.history[index].tempTasks;
    revisedHistory[index].editing = false;

    this.setState({
      history: revisedHistory,
    });
  }

  addNew() {
    const template = {
      employer: 'Employer name...',
      tempEmployer: 'Employer name...',
      position: 'Position...',
      tempPosition: 'Position...',
      from: 'From...',
      tempFrom: 'From...',
      to: 'To',
      tempTo: 'To',
      tasks: 'Main tasks...',
      tempTasks: 'Main tasks...',
      editing: false,
      id: uniqid(),
    };

    this.setState({
      history: this.state.history.concat(template),
    });
  }

  render() {
    return (
      <div className="work-roles">
        <h3>Work Roles</h3>
        <ul>
          {this.state.history.map((role) => {
            if (role.editing === true) {
              return (
                <form
                  className="role-form"
                  key={role.id}
                  onSubmit={this.saveEdit.bind(this, role.id)}
                >
                  <input
                    name="employer"
                    onChange={this.handleChange.bind(this, role.id)}
                    defaultValue={role.employer}
                  ></input>
                  <input
                    name="position"
                    onChange={this.handleChange.bind(this, role.id)}
                    defaultValue={role.position}
                  ></input>
                  <input
                    name="from"
                    onChange={this.handleChange.bind(this, role.id)}
                    defaultValue={role.from}
                  ></input>
                  <input
                    name="to"
                    onChange={this.handleChange.bind(this, role.id)}
                    defaultValue={role.to}
                  ></input>
                  <input
                    name="tasks"
                    onChange={this.handleChange.bind(this, role.id)}
                    defaultValue={role.tasks}
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
                  key={role.id}
                  onDoubleClick={() => this.clickEdit(role.id)}
                >
                  <div>{role.employer}</div>
                  <div>{role.position}</div>
                  <div>
                    <div>
                      {role.from} - {role.to}
                    </div>
                  </div>
                  <div>{role.tasks}</div>
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

export default Work;
