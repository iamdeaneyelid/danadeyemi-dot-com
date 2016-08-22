import React, { Component } from 'react';

class Image extends Component {

  constructor(props) {
    super()
    this.props = props
  }

  render() {
    console.log('header',this.props.project)
    return (
       <img src="http://www.dan.com" className="image"/>
    );
  }
}

export default Image;
