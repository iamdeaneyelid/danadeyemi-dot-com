import contentful from 'contentful-agent'
import React, { Component } from 'react';
import Project from '../components/project'

var request = contentful({
  space: '5jz2ccsep5wg',
  accessToken: 'a8e28687058c38ce699d1f2f44545a7c4735944484900d7548b85f7614aed31e'
})

class Routefiler extends Component {
  constructor(props) {
    super()
    this.props = props
    this.state = {
      data: [],
    }
  }

  componentDidMount() {
    this.getData()
  }

  getData = () => {
    request.get({
    project: {
      id: 'project',
      filters: {
        'fields.slug': [this.props.params.projectSlug]
      }
    }}).then((entries) => {this.setState({data:entries.project[0].fields})})
  }

  render() {
    return (<Project project={this.state.data} />);
  }
}

export default Routefiler;
