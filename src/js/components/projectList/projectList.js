import React, { Component } from 'react';
import './projectList.css';
import pubsub from 'pubsub-js';

class ProjectList extends Component {

  constructor(props) {
    super()
    this.props = props
  }

  triggerImage = (event) => {
    if (this.props.home === true) {
      let imageUrl = event.target.getAttribute('data-project-image')
      pubsub.publish('images', imageUrl);
    }else{
      return null;
    }
  }

  render() {
    return (
      <div className="project-list">
        <p className="project-header">Work</p>
          {
            this.props.projects.map(function(project) {
              return(
                <a key={project.sys.id} href={'/project/' + project.fields.slug} className="project-link" data-project-image={project.fields.featuredImage.fields.file.url} onMouseOver={this.triggerImage}>{project.fields.title}</a>
              )
            }.bind(this))
          }
       </div> 
    );
  }
}

export default ProjectList;