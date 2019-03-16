import React, { Component } from 'react';
import './App.css';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

import {BrowserRouter} from "react-router-dom";
import Header from "./components/header/header";
import Content from "./components/content/content";

class App extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Header navLinks={this.props.state.navLinks} />
          <Content />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;