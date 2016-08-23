import React, { Component } from 'react';
import './sidebar.css';
import Header from '../header/header'
import ProjectList from '../projectList/projectList'
import Footer from '../footer/footer'



class Sidebar extends Component {

  constructor(props) {
    super()
    this.props = props
  }

  render() {
    return (
      <div className="sidebar">
        <Header />
        <ProjectList {...this.props}/>        
      </div> 
    );
  }
}

export default Sidebar;