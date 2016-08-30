import React, { Component } from 'react';
import './header.css';
import { Link } from 'react-router'

class Header extends Component {

  constructor(props) {
    super()
    this.props = props
  }

  render() {
    return (
      <div className="header">
        <Link to="/" className="header-title" activeClassName="header-title-active">Dan Adeyemi</Link>
        <p className="header-tagline">Creative Technologist</p>
      </div>
    );
  }
}

export default Header;