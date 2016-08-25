import React, { Component } from 'react';
import './projectList.css';
import pubsub from 'pubsub-js';
import { Link } from 'react-router'

class ProjectList extends Component {

  constructor(props) {
    super()
    this.props = props
  }

  setLinkImage = (event) => {
    if (this.props.home === true) {
      let imageUrl = event.target.getAttribute('data-project-image')
      pubsub.publish('images', imageUrl);
    }else{
      return null;
    }
  }
  
  setDefaultImage = (event) => {
    if (this.props.home === true) {
      let imageUrl = 'https://s3-eu-west-1.amazonaws.com/iamdeaneyelid/meta-home.gif'
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
                <Link to={'/project/' + project.fields.slug} key={project.sys.id} className="project-link" activeClassName="active-link" data-project-image={project.fields.featuredImage.fields.file.url} onMouseEnter={this.setLinkImage} onMouseLeave={this.setDefaultImage}>{project.fields.title}</Link>
              )
            }.bind(this))
          }
       </div> 
    );
  }
}

export default ProjectList;