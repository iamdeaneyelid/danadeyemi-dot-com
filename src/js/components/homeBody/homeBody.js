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
      selection:'https://www.nasa.gov/sites/default/files/styles/image_card_4x3_ratio/public/thumbnails/image/leisa_christmas_false_color.png'
    }
  }

  componentWillReceiveProps(nextProps){
    this.setState({
      propsRecieved: true
    });
  }

  componentWillMount() {
    console.log('mounted')
    // when React renders me, I subscribe to the topic 'products'
    // .subscribe returns a unique token necessary to unsubscribe
    this.pubsub_token = pubsub.subscribe('products', function(topic, product) {
      console.log('does this fecking work', product)
      // update my selection when there is a message
      this.setState({ selection: product });
    }.bind(this));
  }

  componentWillUnmount() {
    pubsub.unsubscribe(this.pubsub_token);
  } 
  

  render() {
    if (this.state.propsRecieved === true) {
        return (
        <div className="home-body">
          <img className="project-body-image" src={this.state.selection} alt="dan" />
        </div>
      )
    }else {
      return(null)
    }   
  }
}

export default HomeBody;
