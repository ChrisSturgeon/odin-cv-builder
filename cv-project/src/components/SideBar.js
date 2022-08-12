import React, { Component } from 'react';
import '../styles/SideBar.css';
import Contact from './Contact';
import Education from './Education';

class SideBar extends Component {
  render() {
    return (
      <div className="SideBar">
        <Contact />
        <Education />
      </div>
    );
  }
}

export default SideBar;
