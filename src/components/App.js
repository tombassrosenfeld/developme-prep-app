import React, { Component } from 'react';
import {
    BrowserRouter as Router,
    Route,
} from "react-router-dom";
import Header from '../containers/Header';
import ModulesNav from '../containers/ModulesNav';
import Module from '../containers/Module';
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
      <div className="container">
        <ModulesNav />
        <Route path="/modules/:id" render={ ({ match }) => (
          <Module id={ match.params.id } />
        )} />
        <Route path="/tasks/:module/:id" render={ ({ match }) => (
          <Task id={ match.params.id } moduleID={ match.params.module }/>
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
          { this.props.loggedIn ? null : <Login /> }
          { this.props.loggedIn ? this.props.isLoaded? this.loaded() : this.loading() : null }
        </div>  
      </div>
    </Router>
    );
  }
}

export default App;