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
import TaskList from '../containers/TaskList';
import Login from '../containers/Login';

class App extends Component {

  loading() {
    return (
      <p>loading</p> // TODO: make this better
    )
  }

  loaded() {
    return (
      <div>
        <TopicsNav />
        <Route path="/topics/:id" render={ ({ match }) => (
          <div className="row app">
            <Topic id={ match.params.id }/>
            <TaskList id={ match.params.id }/>
          </div>
        )} />
        <Route path="/tasks/:topic/:id" render={ ({ match }) => (
          <div className="row app">
            <Task id={ match.params.id } topicID={ match.params.topic }/>
            <TaskList id={ match.params.topic }/>
          </div>
        )} />
      </div>
    )
  }

  render() {
    return (
    <Router>
      <div>
        <div className="container-fluid container-header">
          <Header />
          <Errors />
          { this.props.loggedIn ? null : <Login /> }
          { this.props.loggedIn ? this.props.isLoaded? this.loaded() : this.loading() : null }
        </div>  
      </div>
    </Router>
    );
  }
}

export default App;