import React, { Component } from 'react';
import { Router, Route, Link } from 'react-router'
import './js/vendor/analytics.js'
import home from './js/components/home'
import { browserHistory } from 'react-router'
import axios from 'axios'
import contentful from 'contentful'
var client = contentful.createClient({
  space: '5jz2ccsep5wg',
  accessToken: 'a8e28687058c38ce699d1f2f44545a7c4735944484900d7548b85f7614aed31e'
})


class App extends Component {
 
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
    client.getEntries()
    .then((entries) => {
        this.setState({data:entries})
    })
  }

  render() {
    return (
    <Router history={browserHistory}>
      <Route path="/" component={home} />
    </Router>
    );
  }
}

export default App;
