import React, { Component } from 'react';
import { Router, Route, browserHistory } from 'react-router'
import './js/vendor/analytics.js'
import router from './js/routes/router'
import MainLayout from './js/views/mainLayout/mainLayout'
import HomeBody from './js/components/homeBody/homeBody'

class App extends Component {
  render() {
    return (
      <Router history={browserHistory}>
        <Route component={MainLayout}>
          <Route path="/" component={HomeBody}/>
          <Route path="/project/:projectSlug" component={router} />
        </Route>
      </Router>
    );
  }
}

export default App;
