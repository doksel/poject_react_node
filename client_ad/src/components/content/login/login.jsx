import React, { Component } from 'react';
import './login.css';

let Login = (props) => {
    return(
    <div className="login">
        <form id="login_form">
            <div className="form_inner">
                <textarea name="task" id="addTask" cols="30" rows="10"/>
                <button className="btn_form js-addTask">add task</button>
            </div>
        </form>
    </div>
    )
}
export default Login;