import React, { Component } from 'react';
import './header.css';

class Header extends Component {

  constructor(props) {
    super()
    this.props = props
  }

  render() {
    return (
      <div className="header">
        <a href="/" className="header-title">Dan Adeyemi</a>
        <p className="header-tagline">Creative Technologist</p>
      </div>
    );
  }
}

export default Header;