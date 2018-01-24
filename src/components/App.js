import React, { Component } from 'react';
import {
    BrowserRouter as Router,
    Route,
} from "react-router-dom";
import Header from '../containers/Header';
import Errors from '../containers/Errors';
import TopicsNav from '../containers/TopicsNav';
import Topic from '../containers/Topic';
import Task from '../containers/Task';
import Login from '../containers/Login';

class App extends Component {

  loading() {
    return (
      <p>loading</p> // TODO: make this better
    )
  }

  loaded() {
    return (
      <div className="row">
        <TopicsNav />
        
          <Route path="/topics/:id" render={ ({ match }) => (
              <Topic id={ match.params.id }/>
          )} />
          <Route path="/topics/:topic/:task" render={ ({ match }) => (
            <Task id={ match.params.task } topicID={ match.params.topic }/>
          )} />
        
      </div>
    )
  }

  render() {
    return (
    <Router>
      <div>
        <div className="container-fluid">
          <Header />
          <Errors />
          <div className="app">
            { this.props.loggedIn ? null : <Login /> }
            { this.props.loggedIn ? this.props.isLoaded? this.loaded() : this.loading() : null }
          </div>
        </div>  
      </div>
    </Router>
    );
  }
}

export default App;