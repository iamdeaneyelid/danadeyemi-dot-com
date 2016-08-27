import React, { Component } from 'react';
import './homeBody.css';
import pubsub from 'pubsub-js';
  
class HomeBody extends Component {

  constructor(props) {
    super()
    this.props = props
    this.pubsub_token = ''
    this.state = {
      imageUrl:'http://iamdeaneyelid.s3.amazonaws.com/dan-3d2.png'
    }
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
      return (
      <div className="home-body">
        <img className="home-body-image" src={this.state.imageUrl} alt="dan" />
      </div>
    )
  }
}

export default HomeBody;
