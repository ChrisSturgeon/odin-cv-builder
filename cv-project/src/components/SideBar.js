import React, { Component } from 'react';
import '../styles/SideBar.css';
import Contact from './Contact';

class SideBar extends Component {
  render() {
    return (
      <div className="SideBar">
        <Contact />
      </div>
    );
  }
}

export default SideBar;
