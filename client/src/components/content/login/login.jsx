import React, { Component } from 'react';
import './login.css';
import { connect } from 'react-redux';
import { getAllUsers, getUser, createUser }  from './../../../actions/usersAction';

class LoginPage extends Component {

    render() {
        return(
        <div className="login">
            <form className="form_register" method="POST">
                <div className="form_inner">
                    <h2 className="form-register-heading">Please register</h2>
                    <div className="form-control">
                        <label for="registerEmail" className="label">Email address</label>
                        <input type="email" id="registerEmail" name="email" className="input" placeholder="Email address" required autofocus></input>
                    </div>
                    <div className="form-control">
                        <label for="registerUsername" className="label">Username</label>
                        <input type="text" id="registerUsername" name="login" className="input" placeholder="Username" required></input>
                    </div>
                    <div className="form-control">
                        <label for="registerPassword" className="label">Password</label>
                        <input type="password" id="registerPassword" name="password" className="input" placeholder="Password" required></input>
                    </div>
                    <div className="form-control">
                        <label for="registerConfirmPassword" className="sr-only">Confirm Password</label>
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
                        <label for="loginUsername" class="label">Username</label>
                        <input type="text" id="loginUsername" name="login" className="input" placeholder="Username" required></input>
                    </div>
                    <div className="form-control">
                        <label for="loginPassword" class="label">Password</label>
                        <input type="password" id="loginPassword" name="password" className="input" placeholder="Password" required></input>
                    </div>
                    <span className="error"></span>
                    <div className="buttons_row">
                        <button className="btn_form btn-login" type="submit">Login</button>
                        <button className="btn_form change-register" type="submit">Register</button>
                    </div>
                </div>
            </form>
        </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        users: state.usersReducer.users,
    };
};

const mapDispatchToProps = dispatch => {
    return {
        getAllUsers: () => dispatch(getAllUsers()),
        getUser: () => dispatch(getUser()),
        createUser: (user) => dispatch(createUser(user)),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(LoginPage);