import React, { Component } from 'react';
import Scroll from 'react-scroll';
let scroller = Scroll.scroller;
let Element = Scroll.Element;

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

  scrollToImages = () => {
    scroller.scrollTo('start', {
      duration: 1500,
      delay: 100,
      smooth: true,
    })
  }

  render() {
        if (this.state.propsRecieved === true) {
        return (
        <div className="project-body">
          <div className="project-body-header">
            <h2 className="project-title">{this.props.project.title}</h2> 
            <p className="project-description">{this.props.project.description}</p>
            <button type="button" className="project-description-scroll" onClick={this.scrollToImages}>Scroll to content</button>
          </div>  
          <Element name="start" className="project-body-images">
          {
            this.props.project.bodyImages.map(function(image) {
              return(
                <div className="project-body-image-wrapper" key={image.sys.id.slice(9,12)}>
                  <img className="project-body-image" src={image.fields.file.url} key={image.sys.id.slice(1,4)} alt={image.fields.description} />
                </div>  
              )
            })
          }
         </Element> 
        </div>
      )
    }else {
      return(null)
    }   
  }
}

export default ProjectBody;
