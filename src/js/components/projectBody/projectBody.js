import React, { Component } from 'react';
import './projectBody.css'
  
class ProjectBody extends Component {

  constructor(props) {
    super()
    this.props = props
    this.state = {
      propsRecieved: false,
    }
  }

  componentWillReceiveProps(nextProps){
    this.setState({
      propsRecieved: true
    })
  }

  render() {
        if (this.state.propsRecieved === true) {
        return (
        <div className="project-body">
          <div className="project-body-header">
            <h2 className="project-title">{this.props.project.title}</h2> 
            <p className="project-description">{this.props.project.description}</p>
            <button type="button" className="project-description-scroll">Scroll to content</button>
          </div>  
          <div className="project-body-images">
          {
            this.props.project.bodyImages.map(function(image) {
              return(
                <div className="project-body-image-wrapper" key={image.sys.id.slice(9,12)}>
                  <img className="project-body-image" src={image.fields.file.url} key={image.sys.id.slice(1,4)} alt={image.fields.description} />
                </div>  
              )
            })
          }
         </div> 
        </div>
      )
    }else {
      return(null)
    }   
  }
}

export default ProjectBody;
