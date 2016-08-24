import React, { Component } from 'react';
import './homeBody.css';
  
class HomeBody extends Component {

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
    });
  }

  render() {
    if (this.state.propsRecieved === true) {
        return (
        <div className="home-body">
          <img className="project-body-image" src={window.x} alt="dan" />
        </div>
      )
    }else {
      return(null)
    }   
  }
}

export default HomeBody;
