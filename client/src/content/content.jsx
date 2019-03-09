import React, { Component } from 'react';
import {BrowserRouter, Route} from "react-router-dom";

let Content = (props) => {
    <BrowserRouter>
        <div className="content">
            <header className="App-header">
                <Route path="/alltasks"/>
                <Route path="/" />
            </header>
        </div>
    </BrowserRouter>
}
export default Content;