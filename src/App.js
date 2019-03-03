import React, { Component } from 'react';
import Header from './components/header/Header';
import Home from './components/home/Home';
import { BrowserRouter as Router } from 'react-router-dom';
import  Route  from 'react-router-dom/Route';

import './App.css';

class App extends Component {
  render() {
    return (
      <Router>
      <div className="App">
        <Header />
        <Home />
      
      </div>
      </Router>
    );
  }
}

export default App;
