import React, { Component } from 'react';
import Header from '../../components/header/header'
import Footer from '../../components/footer/footer'

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
    if (this.state.propsRecieved === true) {
      return (
        <div className="project">

          <Header />

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

        <Footer />
          
        </div>
      )
    }else {
      return(null)
    }
  }
}

export default Project;
