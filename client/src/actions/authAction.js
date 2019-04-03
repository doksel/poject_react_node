import {loginUserDb, registerUserDb} from '../services/authService';

// ======== ACTION_CREATORS
export const loginUserSuccess = (user) => {
    return {
        type: 'LOGIN_USER', user
    }
}
export const registerUserSuccess = (user) => {
    return {
        type: 'REGISTER_USER', user
    }
}

// ======== ACTIONS
export const loginUser = () => {
    return (dispatch) => {
        loginUserDb()
        .then(res => {
            dispatch(loginUserSuccess(res.data.user))
        })
        .catch(err => {
            console.log(err);
        });
    }
}
export const registerUser = (user) => {
    return (dispatch) => {
        registerUserDb(user)
        .then(res => {
            dispatch(registerUserSuccess(res.data.user))
        })
        .catch(err => {
            console.log(err);
        });
    }
}