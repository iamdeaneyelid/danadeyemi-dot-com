import React, { Component } from 'react';
import { Router, Route, browserHistory } from 'react-router'
import './js/vendor/analytics.js'
import router from './js/routes/router'

class App extends Component {
  render() {
    return (
      <Router history={browserHistory}>
        <Route path="/" component={router} />
        <Route path="/project/:projectSlug" component={router} />
      </Router>
    );
  }
}

export default App;
