import React, { Component } from 'react';
import {
    BrowserRouter as Router,
    Route,
} from "react-router-dom";
import axios from '../data/axios';
import Header from './Header';
import ModulesNav from '../containers/ModulesNav';
import Module from '../containers/Module';
import Task from '../containers/Task';

class App extends Component {
  constructor(props) {
    super(props);
    // run function to send api call
    this.getDataFromAPI();
  }

  // TODO: Thunks!
  getDataFromAPI() {
    let apiCall = axios.get('cf_preparation'); // TODO error handling
    apiCall.then(response => {
      this.props.dispatchData(response.data);
    })
  }

  loading() {
    return (
      <div className="container"><p>Loading</p></div>
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
        </div>  
        { this.props.isLoaded ? this.loaded() : this.loading() }
      </div>
    </Router>
    );
  }
}

export default App;