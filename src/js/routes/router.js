import contentful from 'contentful-agent'
import React, { Component } from 'react';
import ProjectBody from '../components/projectBody/projectBody'

var request = contentful({
  space: '5jz2ccsep5wg',
  accessToken: 'a8e28687058c38ce699d1f2f44545a7c4735944484900d7548b85f7614aed31e'
})

class Router extends Component {
  constructor(props) {
    super()
    this.props = props
    this.state = {
      projectData: []
    }
  }

  componentDidMount() {
    this.getProjectData()
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

  render() {
    return (<ProjectBody project={this.state.projectData}/>);
  } 
}

export default Router;
