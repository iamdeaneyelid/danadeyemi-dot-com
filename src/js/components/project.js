import React, { Component } from 'react';
import image from './image.js'

class Project extends Component {

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
    if (this.state.propsRecieved == true) {
      return (
        <div className="project">
         <h2 className="project-title">{this.props.project.title}</h2> 
         <p className="project-description">{this.props.project.description}</p>
         <img className="project-headerimage" src={this.props.project.headerImage.fields.file.url} />
        </div>
      )
    }else {
      return(null)
    }
  }
}

export default Project;
