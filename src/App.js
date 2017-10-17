import React, { Component } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import ModuleNav from './components/ModuleNav';
import axios from 'axios';

class App extends Component {


  render() {
	let posts = axios.get('https://developme.box/wp-json/wp/v2/posts');
	console.log(posts);
    return (
      <div className="container">
        <Header />
        <ModuleNav />
        <Footer />
      </div>
    );
  }
}

export default App;
