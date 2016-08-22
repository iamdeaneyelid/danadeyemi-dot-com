import React, { Component } from 'react';
import Header from '../../components/header/header'
import Footer from '../../components/footer/footer'
import ProjectList from '../../components/projectList/projectList'

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
      <div className="home">
      
        <Header />
        
        <ProjectList {...this.props} />

        <Footer />        

      </div>
    );
  }
}

export default Home;
