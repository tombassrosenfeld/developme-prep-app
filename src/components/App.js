import React, { Component } from 'react';
import {
    BrowserRouter as Router,
    Route,
} from "react-router-dom";
import axios from '../data/axios';
import Header from './Header';
import ModulesNav from '../containers/ModulesNav';
import Module from './Module';

class App extends Component {
  constructor(props) {
    super(props);
    // run function to send api call
    this.getDataFromAPI();
  }

  getDataFromAPI() {
    let apiCall = axios.get('cf_preparation'); // we need to get a .then() going on! // what about errors, when it fails?
    apiCall.then(response => {
      this.props.dispatchData(response.data);
    })
  }

  render() {
    // consider seperating our the render function into seperate functions. loading() could return a loading sign initially then the rest of the app when the data is loaded.
    return (
    <Router>
      <div>
        <div className="container">
          <Header />
        </div>  
        { this.props.isLoaded ?
          <div className="container">
            <ModulesNav />
            <Route path="/module/:number" render={ ({ match }) => (
        		  <Module number={ match.params.number } />
    		    )} />
          </div>
          :
          null
        }
      </div>
    </Router>
    );
  }
}

export default App;
