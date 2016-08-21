import React, { Component } from 'react';
import '../../home.css';

class Home extends Component {
  render() {
    return (
      <div className="home">
        <div className="home-header">
          <h2 className="home-title">Dan Adeyemi</h2>
          <p className="home-tagline">Creative Technologist Specialising in all things digital</p>
          <a href="https://www.instagram.com/iamdeaneyelid/" className="home-link home-instagram" target="_blank">Instagram</a>
          <a href="https://twitter.com/iamdeaneyelid" className="home-link home-twitter" target="_blank">Twitter</a>
          <a href="https://uk.linkedin.com/in/danadeyemi" className="home-link home-twitter" target="_blank">LinkedIn</a>
          <a href="mailto:info@danadeyemi.com" className="home-link home-email">Email</a>
        </div>
        <div className="home-footer">
          <a href="https://s3-eu-west-1.amazonaws.com/iamdeaneyelid/dan-adeyemi-cv.pdf" className="home-link home-cv" target="_blank">CV</a>
        </div> 
      </div>
    );
  }
}

export default Home;
