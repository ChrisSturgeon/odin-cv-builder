import React, { Component } from 'react';
import '../styles/Profile.css';

class Profile extends Component {
  constructor() {
    super();

    this.clickEdit = this.clickEdit.bind(this);

    this.state = {
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin scelerisque commodo velit, dictum tincidunt lorem congue id. Praesent non urna tincidunt, feugiat metus in, venenatis magna. Praesent ultricies urna nec pulvinar faucibus. Fusce id condimentum orci, sit amet lobortis sapien. Fusce ultricies purus in tellus faucibus vehicula. Curabitur et nibh posuere, semper metus a, laoreet eros. Proin mollis id sem sed varius.',
      tempText:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin scelerisque commodo velit, dictum tincidunt lorem congue id. Praesent non urna tincidunt, feugiat metus in, venenatis magna. Praesent ultricies urna nec pulvinar faucibus. Fusce id condimentum orci, sit amet lobortis sapien. Fusce ultricies purus in tellus faucibus vehicula. Curabitur et nibh posuere, semper metus a, laoreet eros. Proin mollis id sem sed varius.',
      editing: false,
    };
  }

  clickEdit() {
    this.setState({ editing: true });
  }

  handleChange(event) {
    this.setState({
      tempText: event.target.value,
    });
  }

  saveEdit(event) {
    event.preventDefault();
    this.setState({
      text: this.state.tempText,
      editing: false,
    });
  }

  render() {
    const makeChange = this.handleChange;
    const setEdit = this.saveEdit;

    if (this.state.editing === true) {
      return (
        <div>
          <h2 className="profile-header">Profile</h2>
          <form onSubmit={setEdit.bind(this)} className="textArea">
            <textarea
              onChange={makeChange.bind(this)}
              defaultValue={this.state.text}
              className="textArea"
            ></textarea>
            <button className="save-btn" type="submit">
              <i className="fa-solid fa-circle-check"></i>
            </button>
            <button className="cancel-btn">
              <i className="fa-solid fa-trash-can"></i>
            </button>
          </form>
        </div>
      );
    } else {
      return (
        <div className="profile-text">
          <h2 className="profile-header">Profile</h2>
          <p onClick={this.clickEdit}>{this.state.text}</p>
        </div>
      );
    }
  }
}

export default Profile;
