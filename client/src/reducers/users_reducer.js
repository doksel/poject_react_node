const GET_ALL_USERS = 'GET_ALL_USERS';
const GET_USER = 'GET_USER';


let initialState = {users:[], user: {}};

export const usersReducer = (state = initialState, action = initialState) => {
    switch(action.type){
        case GET_ALL_USERS:
        return state;
        case GET_USER:
        return state;
        default:
            return state;
    }
}