import React, { Component } from 'react';
import Sidebar from '../../components/sidebar/sidebar'
import Footer from '../../components/footer/footer'
import contentful from 'contentful-agent'

var request = contentful({
  space: '5jz2ccsep5wg',
  accessToken: 'a8e28687058c38ce699d1f2f44545a7c4735944484900d7548b85f7614aed31e'
})

class MainLayout extends Component {

  constructor(props) {
    super()
    this.props = props
    this.state = {
      homeData:[],
      homeLocation:false
    }
  }

  componentDidMount() {
    this.determineLocation()
    this.getHomeData()
  }

  determineLocation = () => {
    if (this.props.location.pathname === '/') {
      this.state = {
        homeLocation:true
      }
    };
  }

  getHomeData = () => {
  request.get({
    project: {
    id: 'project'
    }}).then((entries) => {this.setState({homeData:entries.project})})
  }

  render() {
    return (
      <div className="main">
        <Sidebar projects={this.state.homeData} home={this.state.homeLocation}/>
        <main>
          {this.props.children}
        </main>
        <Footer />
      </div>
    );
  }
}

export default MainLayout;