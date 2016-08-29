import React, { Component } from 'react';
import Modal from 'boron/OutlineModal';
import './aboutModal.css'

class AboutModal extends Component {

  constructor(props) {
    super()
    this.props = props
  }

  showModal = () => {
    this.refs.modal.show();
  }

  hideModal = () => {
    this.refs.modal.hide();
  }

  render() {
    return (
      <div>
          <button className="footer-link info-box-text" onClick={this.showModal}>About</button>
          <Modal ref="modal" className="modal">
              <h2 className="modal-header">Dan Adeyemi</h2>
              <p className="modal-date">b.1990</p>
              <div className="modal-description">
                <p className="modal-description-text">
                  Dan Adeyemi is a Creative Technologist Based in London with 3+ years experience working
                  in digital media. 
                </p>
                 <p className="modal-description-text">
                  Dan is equipped with proficient skills to advise, create and manage digital projects in a creative environment while having a full stack of programming skills.
                  Currently working full time at Shortlist Media.
                  Previous employers include Dazed Media, Net-A-Porter & WCRS(Apple Account).
                 </p>
                 <p className="modal-description-text">
                  Dan has also done freelance work in Graphic Design, Web Development &amp; Consultancy for various brands.
                  He is also the founder of creative agency <i>A Sense Of Scale</i>.
                </p>
              </div>
              <a href="https://s3-eu-west-1.amazonaws.com/iamdeaneyelid/dan-adeyemi-cv.pdf" className="modal-description-text cv-link" target="_blank">CV</a>
              <div className="modal-social-links">
                <a href="https://www.instagram.com/iamdeaneyelid/" className="footer-link footer-instagram" target="_blank">Instagram</a>
                <a href="https://twitter.com/iamdeaneyelid" className="footer-link footer-twitter" target="_blank">Twitter</a>
                <a href="https://uk.linkedin.com/in/danadeyemi" className="footer-link footer-twitter" target="_blank">LinkedIn</a>
                <a href="mailto:info@danadeyemi.com?subject=Hi%20Dan" className="footer-link footer-email">Email</a>
              </div>
          </Modal>
      </div>
    );
  }
}

export default AboutModal;