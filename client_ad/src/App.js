import React, { Component } from 'react';
import './App.css';

import {BrowserRouter} from "react-router-dom";
import Header from "./components/header/header";
import Content from "./components/content/content";
import axios from "axios";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {users:[]};
  }
  componentDidMount() {
    fetch("http://localhost:3001/api/users")
      .then(res => res.json())
      .then(
        (result) => {
          this.setState({
            users: result.users
          });
          console.log(result)
        })
      }
  render() {
    const { users } = this.state;
    return (
      <BrowserRouter>
        <div className="App">
          {users.map(user => (
            <div key={user.name}>
              {user.name} {user.sername}
            </div>
          ))}
          <Header />
          <Content />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
