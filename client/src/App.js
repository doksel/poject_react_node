import React, { Component } from 'react';
import './App.css';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

import Header from "./components/header/header";
import Content from "./components/content/content";

class App extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="App">
        <Header navLinks={this.props.state.navLinks} />
        <Content />
      </div>
    );
  }
}

export default App;