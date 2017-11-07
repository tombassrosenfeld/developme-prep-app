import React, { Component } from 'react';
import {
    BrowserRouter as Router,
    Route,
} from "react-router-dom";
import Header from '../containers/Header';
import Errors from '../containers/Errors';
import ModulesNav from '../containers/ModulesNav';
import Module from '../containers/Module';
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
        <ModulesNav />
        <Route path="/modules/:id" render={ ({ match }) => (
          <div className="row app">
            <Module id={ match.params.id }/>
            <TaskList id={ match.params.id }/>
          </div>
        )} />
        <Route path="/tasks/:module/:id" render={ ({ match }) => (
          <div className="row app">
            <Task id={ match.params.id } moduleID={ match.params.module }/>
            <TaskList id={ match.params.module }/>
          </div>
        )} />
      </div>
    )
  }

  render() {
    return (
    <Router>
      <div>
        <div className="container">
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