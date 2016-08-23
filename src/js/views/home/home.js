import React, { Component } from 'react';
import './home.css';
import Sidebar from '../../components/sidebar/sidebar';
import Footer from '../../components/footer/footer';
import HomeCarousel from '../../components/HomeCarousel/HomeCarousel';

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
       <Sidebar {...this.props}/>
       <HomeCarousel {...this.props}/>
       <Footer /> 
      </div>
    );
  }
}

export default Home;
