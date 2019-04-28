const LOGIN_USER = 'LOGIN_USER';
const REGISTER_USER = 'REGISTER_USER';


export const authReducer = (state = {users:[], dataAuth: {}}, action = {}) => {
    switch(action.type){
        case LOGIN_USER:
        return {...state, dataAuth: action.data}
        case REGISTER_USER:
        return {...state, dataAuth: action.data}
        default:
            return state;
    }
}