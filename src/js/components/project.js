import React, { Component } from 'react';

class Project extends Component {

  constructor(props) {
    super()
    this.props = props
  }

  render() {
    console.log(this.props.project);
    return (
      <div className="project">
       <h2 className="project-title">{this.props.project.title}</h2> 
       <p className="project-description">{this.props.project.description}</p>
      </div>
    );
  }
}

export default Project;
