import React, { Component } from 'react';
import Login from "./login";

import { Route } from "react-router-dom";

let Content = (props) => {
    return(
    <div className="content">
        <Route path="/login" component={Login} />
        <Route path="/" />
    </div>
    )
}
export default Content;