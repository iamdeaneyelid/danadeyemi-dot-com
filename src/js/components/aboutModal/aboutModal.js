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
                  Dan Adeyemi is a Creative Technologist Based in London with 3+ years experience of working
                  in digital media.
                  Educated at Goldsmiths University, there he did 3 years of a Undergraduate in Creative Computing.
                </p>
                 <p className="modal-description-text">
                  Dan started his professional career at E-Commerce company Net-A-Porter, working there as a Junior Web Producer. His
                  role there included producing their online magazine <i>The Edit</i> and homepage maintenance.
                  He then moved to Style/Fashion bible Dazed Digital working there as a Web Developer. There he worked on various commercial 
                  projects and worked on the styling/build for the AnOther Magazine website relaunch. Currently, he os at Shortlist Media. 
                  Working as a Creative Technologist. Here he overlooks all their brands, advising, prototyping and building new and current web
                  technology for their various brands.
                </p>
                 <p className="modal-description-text">
                  Dan has also done freelance work in Graphic Design, Web Development &amp; Consultancy for various brands.
                  He is also the founder of creative agency <i>A Sense Of Scale</i>.
                </p>
              </div>
              <a href="https://s3-eu-west-1.amazonaws.com/iamdeaneyelid/dan-adeyemi-cv.pdf" className="modal-description-text cv-link" target="_blank">CV</a>
          </Modal>
      </div>
    );
  }
}

export default AboutModal;