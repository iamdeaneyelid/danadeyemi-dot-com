import React, { Component } from 'react';
import './sidebar.css';
import Header from '../header/header'
import ProjectList from '../projectList/projectList'
import { slide as Menu } from 'react-burger-menu';
import { Link } from 'react-router'

import Radium from 'radium';

let RadiumLink = Radium(Link);

class Sidebar extends Component {

  constructor(props) {
    super()
    this.props = props
  }

  render() {
    return (
      <div className="sidebar">
        <Menu id={"header-mobile-menu"} right >
          <p className="header-mobile-project-header project-header">Work</p>
           {
            this.props.projects.map(function(project) {
              return(
                <RadiumLink className="header-mobile-menu-item project-link" to={'/project/' + project.fields.slug} onClick={this.closeMenu} key={project.sys.id} activeClassName="header-mobile-menu-item-active">{project.fields.title}</RadiumLink>
              )
            }.bind(this))
          }
        </Menu>
        <Header {...this.props}/>
        <ProjectList {...this.props}/>        
      </div> 
    );
  }
}

export default Sidebar;