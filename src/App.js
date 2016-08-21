import React, { Component } from 'react';
import { Router, Route, Link } from 'react-router'
import './js/vendor/analytics.js'
import Home from './js/components/home'
import { browserHistory } from 'react-router'


class App extends Component {
  render() {
    return (
    <Router history={browserHistory}>
      <Route path="/" component={Home} />
    </Router>
    );
  }
}

export default App;
