import React, { Component } from 'react';
import { Router, Route } from 'react-router'
import './js/vendor/analytics.js'
import home from './js/components/home'
import routefiler from './js/routes/route-filer'
import { browserHistory } from 'react-router'

class App extends Component {
  render() {
    return (
      <Router history={browserHistory}>
        <Route path="/" component={home} />
        <Route path="/project/:projectSlug" component={routefiler} />
      </Router>
    );
  }
}

export default App;
