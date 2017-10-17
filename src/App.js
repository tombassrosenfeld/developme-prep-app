import React, { Component } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import ModuleNav from './components/ModuleNav';

class App extends Component {
  render() {
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
