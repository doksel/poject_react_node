const LOGIN_USER = 'LOGIN_USER';
const REGISTER_USER = 'REGISTER_USER';


let initialState = {users:[], user: {}};

export const authReducer = (state = initialState, action = {}) => {
    switch(action.type){
        case LOGIN_USER:
        return {...state, user: action.user}
        case REGISTER_USER:
        return {...state, user: action.user}
        default:
            return state;
    }
}