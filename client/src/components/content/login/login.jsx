import React, { Component } from 'react';

let Login = (props) => {
    return(
    <div className="login">
        <form id="login_form">
            <textarea name="task" id="addTask" cols="30" rows="10"/>
            <button className="js-addTask">add task</button>
        </form>
    </div>
    )
}
export default Login;