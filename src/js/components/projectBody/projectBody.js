import React, { Component } from 'react';
  
class ProjectBody extends Component {

  constructor(props) {
    super()
    this.props = props
  }
  render() {
        return (
        <div className="project-body">
          <h2 className="project-title">{this.props.project.title}</h2> 
          <p className="project-description">{this.props.project.description}</p>
          <img className="project-header-image" src={this.props.project.headerImage.fields.file.url} alt={this.props.project.headerImage.fields.description} />

          {
            this.props.project.bodyImages.map(function(image) {
              return(
                <div className="project-body-image-wrapper">
                  <img className="project-body-image" src={image.fields.file.url} key={image.sys.id} alt={image.fields.description} />
                  <p className="project-body-image-description" key={10}>{image.fields.description}</p>
                </div>  
              )
            })
          }
        </div>
      )
  }
}

export default ProjectBody;
