import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import HomePage from './containers/homePage';
import IndexPage from './containers/indexPage';
import './resources/css/App.css';

class Routes extends Component {
  render() {
    return(
    <Router >
      <div>
        <Route exact path="/" component={IndexPage}/>
		    <Route exact path="/homepage" component={HomePage}/>
      </div>
    </Router>
    );
  }
}

export default Routes;
