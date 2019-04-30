const LOGIN_USER = 'LOGIN_USER';
const REGISTER_USER = 'REGISTER_USER';
const AUTH_USER = 'AUTH_USER';


export const authReducer = (state = {authUser:{}, users:[], dataAuth: {}}, action = {}) => {
    switch(action.type){
        case LOGIN_USER:
        return {...state, dataAuth: action.data}
        case REGISTER_USER:
        return {...state, dataAuth: action.data}
        case AUTH_USER:
        return {...state, authUser: action.data}
        default:
            return state;
    }
}