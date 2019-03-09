import React, { Component } from 'react';
import './App.css';

import Header from "./content/content";
import Content from "./header/header";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Content />
      </div>
    );
  }
}

export default App;
