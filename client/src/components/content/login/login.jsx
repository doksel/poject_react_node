import React, { Component } from 'react';
import './login.css';

import { connect } from 'react-redux';
import { loginUser, registerUser }  from '../../../actions/authAction';

class LoginPage extends Component {

    registerUser = (e) => {
        e.preventDefault();
        let user = {
            login: document.querySelector('#registerUsername').value,
            email: document.querySelector('#registerEmail').value,
            password: document.querySelector('#registerPassword').value,
            passwordConfirm: document.querySelector('#registerConfirmPassword').value,
        };
        this.props.registerUser(user)
    }
    loginUser = (e) => {
        e.preventDefault();
        let user = {
            login: document.querySelector('#loginUsername').value,
            password: document.querySelector('#loginPassword').value,
        };
        this.props.loginUser(user)
    }   
    changeRegister(e){
        e.preventDefault();
        const formRegister = document.querySelector('.form_register');
        const formLogin = document.querySelector('.form_login');
        formRegister.style.display = 'flex';
        formLogin.style.display = 'none';
    }
    componentDidMount() {
    }
    componentDidUpdate() {
    }
    render() {
        const dataAuth = this.props.dataAuth.user;
        if(!dataAuth){
            return(
            <div className="login">
                {dataAuth?(<h1>hello {dataAuth.login}</h1>):null}       
                <form className="form_register" method="POST">
                    <div className="form_inner">
                        <h2 className="form-register-heading">Please register</h2>
                        <div className="form-control">
                            <label htmlFor="registerEmail" className="label">Email address</label>
                            <input type="email" id="registerEmail" name="email" className="input" placeholder="Email address" required autoFocus></input>
                        </div>
                        <div className="form-control">
                            <label htmlFor="registerUsername" className="label">Username</label>
                            <input type="text" id="registerUsername" name="login" className="input" placeholder="Username" required></input>
                        </div>
                        <div className="form-control">
                            <label htmlFor="registerPassword" className="label">Password</label>
                            <input type="password" id="registerPassword" name="password" className="input" placeholder="Password" required></input>
                        </div>
                        <div className="form-control">
                            <label htmlFor="registerConfirmPassword" className="sr-only">Confirm Password</label>
                            <input type="password" id="registerConfirmPassword" name="passwordConfirm" className="input" placeholder="Confirm Password" required></input>
                        </div>
                        <span className="error"></span>
                        <button className="btn_form btn-register" type="submit">Register</button>
                    </div>
                </form>
                
                <form className="form_login" method="POST">
                    <div className="form_inner">
                        <h2 className="form-signin-heading">Please login</h2>
                        <div className="form-control">
                            <label htmlFor="loginUsername" className="label">Username</label>
                            <input type="text" id="loginUsername" name="login" className="input" placeholder="Username" required></input>
                        </div>
                        <div className="form-control">
                            <label htmlFor="loginPassword" className="label">Password</label>
                            <input type="password" id="loginPassword" name="password" className="input" placeholder="Password" required></input>
                        </div>
                        <span className="error"></span>
                        <div className="buttons_row">
                            <button className="btn_form btn-login" onClick={this.loginUser}>Login</button>
                            <button className="btn_form change-register" onClick={this.changeRegister}>Register</button>
                        </div>
                    </div>
                </form>
            </div>
            )
        }else{
            return(
                <div>
                    <h1>hello {dataAuth.login}</h1>
                    <button className="btn_form btn-logout" type="submit">Logout</button>
                </div>
            )
        }
    }
}

const mapStateToProps = state => {
    return {
        dataAuth: state.authReducer.dataAuth,
    };
};

const mapDispatchToProps = dispatch => {
    return {
        loginUser: (user) => dispatch(loginUser(user)),
        registerUser: (user) => dispatch(registerUser(user)),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(LoginPage);