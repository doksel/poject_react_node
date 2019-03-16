import React, { Component } from 'react';
import './App.css';

import {BrowserRouter} from "react-router-dom";
import Header from "./components/header/header";
import Content from "./components/content/content";

class App extends Component {
  state = {users:[{id:1,login:'jjj'},{id:2,login:'qqq'},{id:3,login:'qqwwww'}]}
  componentDidMount(){
    // fetch('/api/users')
    // .then(res=>res.json())
    // .then(users=>this.setState({users}));
  }
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          {this.state.users.map(user=>
            <div key={user.id}>{user.login}</div>)}
          <Header />
          <Content />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
