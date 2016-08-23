import React, { Component } from 'react';
import './footer.css';

class Footer extends Component {

  constructor(props) {
    super()
    this.props = props
  }

  render() {
    return (
      <div className="footer">
        <div className="info-box">
          <a href="mailto:info@danadeyemi.com" className="footer-link info-box-text">Project Request</a>
        </div>        
        <div className="social-links">
          <a href="https://s3-eu-west-1.amazonaws.com/iamdeaneyelid/dan-adeyemi-cv.pdf" className="footer-link footer-cv" target="_blank">CV</a>
          <a href="https://www.instagram.com/iamdeaneyelid/" className="footer-link footer-instagram" target="_blank">Instagram</a>
          <a href="https://twitter.com/iamdeaneyelid" className="footer-link footer-twitter" target="_blank">Twitter</a>
          <a href="https://uk.linkedin.com/in/danadeyemi" className="footer-link footer-twitter" target="_blank">LinkedIn</a>
        </div>  
      </div>  
    );
  }
}

export default Footer;