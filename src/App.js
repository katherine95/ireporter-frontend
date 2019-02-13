import React, { Component } from 'react';
import './App.css';
import { Navbar } from './components/Navbar';
import { Login } from './components/Login';


export class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar />
        <Login />
      </div>
    );
  }
}
