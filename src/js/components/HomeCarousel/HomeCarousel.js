import React, { Component } from 'react';
import Carousel from 'react-3d-carousel';
import Ease from 'ease-functions';

class HomeCarousel extends Component {
  constructor(props) {
    super()
    this.props = props
    this.state = {
      propsRecieved: false,
      images: this.getImage(),
      width: 400,
      layout: 'prism',
      ease: 'linear',
      duration: 400
    }
  }

  test = () => {
    return(
      this.props.projects
    )
  }

  componentWillReceiveProps(nextProps){
    this.setState({
      propsRecieved: true
    })
  }
    
  getImage = () => {  
    console.log('projects',this.props)
    this.props.projects.map = (project) => {
     return(project)
    }
  }

  renderCarousel = () => {
    if (this.state.propsRecieved) {
      return (
        <div>
          <Carousel width={this.state.width}
          images={this.state.images}
          ease={this.state.ease}
          duration={this.state.duration}
          layout={this.state.layout}/>
        </div>   
      );
    };
  }



  render() {
    if (this.state.propsRecieved) {
      return (
       this.renderCarousel()
      );
    }else{
      return(null)
    }
  }
}

export default HomeCarousel;


