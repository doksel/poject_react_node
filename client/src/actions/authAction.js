import {loginUserDb, registerUserDb, authUserSession} from '../services/authService';

// ======== ACTION_CREATORS
export const loginUserSuccess = (data) => {
    return {
        type: 'LOGIN_USER', data
    }
}
export const registerUserSuccess = (data) => {
    return {
        type: 'REGISTER_USER', data
    }
}
export const authUserSuccess = (data) => {
    return {
        type: 'AUTH_USER', data
    }
}
// ======== ACTIONS
export const authUser = () => {
    return (dispatch) => {
        authUserSession()
        .then(res => {
            console.log(11111111);
            console.log(res.data);
            dispatch(authUserSuccess(res.data))
        })
        .catch(err => {
            console.log(err);
        });
    }
}
export const loginUser = (user) => {
    return (dispatch) => {
        loginUserDb(user)
        .then(response => {
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
                };
                dispatch(loginUserSuccess(response.data));
            }
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
            validateRegister(res)
        })
        .then(res => {
            dispatch(registerUserSuccess(res.data))
        })
        .catch(err => {
            console.log(err);
        });
    }
}

function validateRegister(response) {
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
        };
    }
}  