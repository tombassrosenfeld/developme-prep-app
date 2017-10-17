import React, { Component } from 'react';
import {
    BrowserRouter as Router,
    Route,
} from "react-router-dom";
import Header from './components/Header';
import Footer from './components/Footer';
import ModulesNav from './containers/ModulesNav';
import Module from './components/Module';
// import axios from 'axios';

class App extends Component {

  render() {
	// let posts = axios.get('http://developme.box/wp-json/wp/v2/posts');
	// console.log(posts);
    return (
    <Router>
      <div className="container">
        <Header />
        <ModulesNav />
        <Route path="/module/:number" render={ ({ match }) => (
    		<Module number={ match.params.number } />
		)} />
        <Footer />
      </div>
     </Router>
    );
  }
}

export default App;
