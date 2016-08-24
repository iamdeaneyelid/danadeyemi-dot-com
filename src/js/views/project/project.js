import React, { Component } from 'react';
import Sidebar from '../../components/sidebar/sidebar'
import Footer from '../../components/footer/footer'
import ProjectBody from '../../components/projectBody/projectBody'


class Project extends Component {

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
    if (this.state.propsRecieved === true) {
      return (
        <div className="project">
          <Sidebar {...this.props} />
          // <ProjectBody {...this.props} />
          <Footer />          

        </div>
      )
    }else {
      return(null)
    }
  }
}

export default Project;