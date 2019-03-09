import React, { Component } from 'react';
import './App.css';

import {BrowserRouter} from "react-router-dom";
import Header from "./content";
import Content from "./header";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Content />
          <Header />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
