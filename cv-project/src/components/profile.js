import React, { Component } from 'react';
import '../styles/Profile.css';

class Profile extends Component {
  constructor() {
    super();

    this.state = {
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin scelerisque commodo velit, dictum tincidunt lorem congue id. Praesent non urna tincidunt, feugiat metus in, venenatis magna. Praesent ultricies urna nec pulvinar faucibus. Fusce id condimentum orci, sit amet lobortis sapien. Fusce ultricies purus in tellus faucibus vehicula. Curabitur et nibh posuere, semper metus a, laoreet eros. Proin mollis id sem sed varius.',
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

  render() {
    if (this.state.editing === true) {
      return (
        <div>
          <h2>Profile</h2>
          <textarea className="textArea">{this.state.text}</textarea>
        </div>
      );
    } else {
      return (
        <div>
          <h2>Profile</h2>
          <p>{this.state.text}</p>
        </div>
      );
    }
  }
}

export default Profile;
