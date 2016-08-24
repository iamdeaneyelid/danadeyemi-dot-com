import React, { Component } from 'react';
import './homeBody.css';
import pubsub from 'pubsub-js';
  
class HomeBody extends Component {

  constructor(props) {
    super()
    this.props = props
    this.pubsub_token = ''
    this.state = {
      propsRecieved: false,
      imageUrl:'https://s3-eu-west-1.amazonaws.com/iamdeaneyelid/meta-home.gif'
    }
  }

  componentWillReceiveProps(nextProps){
    this.setState({
      propsRecieved: true
    });
  }

  componentWillMount() {
    this.pubsub_token = pubsub.subscribe('images', function(topic, image) {
      this.setState({ imageUrl: image });
    }.bind(this));
  }

  componentWillUnmount() {
    pubsub.unsubscribe(this.pubsub_token);
  } 
  

  render() {
    if (this.state.propsRecieved === true) {
        return (
        <div className="home-body">
          <img className="home-body-image" src={this.state.imageUrl} alt="dan" />
        </div>
      )
    }else {
      return(null)
    }   
  }
}

export default HomeBody;
