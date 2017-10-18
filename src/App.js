import React, { Component } from 'react';
import {
    BrowserRouter as Router,
    Route,
} from "react-router-dom";
import Header from './components/Header';
import ModulesNav from './containers/ModulesNav';
import Module from './components/Module';

class App extends Component {

  render() {
    return (
    <Router>
      <div className="container">
        <Header />
        <ModulesNav />
        <Route path="/module/:number" render={ ({ match }) => (
    		<Module number={ match.params.number } />
		)} />
      </div>
     </Router>
    );
  }
}

export default App;
