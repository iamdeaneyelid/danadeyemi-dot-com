import React, { Component } from 'react';
import Sidebar from '../../components/sidebar/sidebar'
import Footer from '../../components/footer/footer'

import './home.css';

class Home extends Component {

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
    })
  }


  render() {
    return (
      <div className="home clearfix">
       <Sidebar {...this.props} home={true}/>
       <Footer /> 
      </div>
    );
  }
}

export default Home;
