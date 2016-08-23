import React, { Component } from 'react';
import './footer.css';
import AboutModal from'../aboutModal/aboutModal';

class Footer extends Component {

  constructor(props) {
    super()
    this.props = props
  }

  render() {
    return (
      <div className="footer">
        <div className="info-box">
          <AboutModal />
        </div>        
        <div className="social-links">
          <a href="https://www.instagram.com/iamdeaneyelid/" className="footer-link footer-instagram" target="_blank">Instagram</a>
          <a href="https://twitter.com/iamdeaneyelid" className="footer-link footer-twitter" target="_blank">Twitter</a>
          <a href="https://uk.linkedin.com/in/danadeyemi" className="footer-link footer-twitter" target="_blank">LinkedIn</a>
          <a href="mailto:info@danadeyemi.com?subject=Hi%20Dan" className="footer-link footer-email">Email</a>
        </div>  
      </div>  
    );
  }
}

export default Footer;