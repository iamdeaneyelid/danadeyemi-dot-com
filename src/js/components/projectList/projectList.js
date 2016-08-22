import React, { Component } from 'react';
import './projectList.css';

class ProjectList extends Component {

  constructor(props) {
    super()
    this.props = props
  }

  render() {
    return (
      <div className="project-list">
        <p className="project-header">Projects</p>
          {
            this.props.projects.map(function(project) {
              return(
                <a key={project.sys.id} href={'/project/' + project.fields.slug} className="project-link">{project.fields.title}</a>
              )
            })
          }
       </div> 
    );
  }
}

export default ProjectList;