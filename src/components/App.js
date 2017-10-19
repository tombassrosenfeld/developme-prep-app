import React, { Component } from 'react';
import {
    BrowserRouter as Router,
    Route,
} from "react-router-dom";
import axios from '../data/axios';
import Header from './Header';
import ModulesNav from '../containers/ModulesNav';
import Module from '../containers/Module';

class App extends Component {
  constructor(props) {
    super(props);
    // run function to send api call
    this.getDataFromAPI();
  }

  // TODO: this shouldn't be here. But it can't be in the reducer because it's asynchronous and the reducer needs to return state immediately. Redux-thunks library would make it possible to put this in the actions creator and then only dispatch once it gets the response. 
  getDataFromAPI() {
    let apiCall = axios.get('cf_preparation'); // we need to get a .then() going on! // what about errors, when it fails?
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
        <Route path="/module/:id" render={ ({ match }) => (
          <Module id={ match.params.id } />
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