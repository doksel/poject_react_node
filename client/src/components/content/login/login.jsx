import React, { Component } from 'react';
import './login.css';
import { connect } from 'react-redux';
import { loginUser, registerUser }  from '../../../actions/authAction';

class LoginPage extends Component {

    registerUser = (e) => {
        e.preventDefault();
        let data = {
            login: document.querySelector('#registerUsername').value,
            email: document.querySelector('#registerEmail').value,
            password: document.querySelector('#registerPassword').value,
            passwordConfirm: document.querySelector('#registerConfirmPassword').value,
        };
        this.props.registerUser(data)
        .then(this.validateRegister);
    }
    loginUser = (e) => {
        e.preventDefault();
        let data = {
            login: document.querySelector('#loginUsername').value,
            password: document.querySelector('#loginPassword').value,
        };
        console.log(data);
        this.props.loginUser(data)
        .then(this.validateRegister);
    }
    validateRegister(response) {
        console.log(response.data);
        const data = response.data;
        const spanError = document.querySelectorAll('.error');
    
        if(!data.ok){
            if(spanError){
                spanError.forEach(item => {
                    item.innerHTML = '';
                    item.innerHTML = response.data.error; 
                });
            };
            if(data.fields){
                data.fields.forEach(item => {
                    let input = document.querySelectorAll(`input[name=${item}]`);
                    if(input){
                        input.forEach(item => {
                            item.style.borderColor='red'; 
                        });
                    };
                });
            };
        }else{        
            if(spanError){
                spanError.forEach(item => {
                    item.innerHTML = '';
                    item.innerHTML = 'Вы успешео зарегистрировалиь!!!';
                });
                resetInputValue();
            };
            setTimeout(() => {
                location="/";
            },3000);
        }
    }    
    changeRegister(e){
        e.preventDefault();
        const formRegister = document.querySelector('.form-register');
        const formLogin = document.querySelector('.form-login');
        formRegister.style.display = 'flex';
        formLogin.style.display = 'none';
    }
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
        users: state.authReducer.users,
    };
};

const mapDispatchToProps = dispatch => {
    return {
        loginUser: (user) => dispatch(loginUser(user)),
        registerUser: (user) => dispatch(registerUser(user)),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(LoginPage);