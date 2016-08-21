import React, { Component } from 'react';
import { Router, Route, Link } from 'react-router'
import './js/vendor/analytics.js'
import home from './js/components/home'
import { browserHistory } from 'react-router'
import axios from 'axios'


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
    axios.get('/path/to/user-api').then(function(response) {
      this.setState({data: response})
    });
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
