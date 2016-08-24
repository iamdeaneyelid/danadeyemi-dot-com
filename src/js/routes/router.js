import contentful from 'contentful-agent'
import React, { Component } from 'react';
import Project from '../views/project/project'
import Home from '../views/home/home'


var request = contentful({
  space: '5jz2ccsep5wg',
  accessToken: 'a8e28687058c38ce699d1f2f44545a7c4735944484900d7548b85f7614aed31e'
})

class Router extends Component {
  constructor(props) {
    super()
    this.props = props
    this.state = {
      projectData: [],
      homeData:[]
    }
  }

  componentDidMount() {
    this.getProjectData()
    this.getHomeData()
  }

  getProjectData = () => {
    request.get({
    project: {
      id: 'project',
      filters: {
        'fields.slug': [this.props.params.projectSlug]
      }
    }}).then((entries) => {this.setState({projectData:entries.project[0].fields})})
  }

   getHomeData = () => {
    request.get({
    project: {
      id: 'project'
    }}).then((entries) => {this.setState({homeData:entries.project})})
  }


  render() {
    if (this.props.route.path === '/project/:projectSlug') {
      return (<Project project={this.state.projectData} projects={this.state.homeData} />);
    } 
     if (this.props.route.path === '/') {
      return (<Home projects={this.state.homeData} />);
    }   
  }
}

export default Router;
