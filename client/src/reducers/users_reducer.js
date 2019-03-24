const ADD_USER = 'ADD_USER';
const UPDATE_USER = 'UPDATE_USER';
const DELETE_USER = 'DELETE_USER';

let initialState = {};

export const usersReducer = (state = initialState, action = initialState) => {
    switch(action.type){
        case ADD_USER:
        return state;
        case UPDATE_USER:
        return state;
        case DELETE_USER:
        return state;
        default:
            return state;
    }
}
export const createUserCreator = () => ({type: ADD_USER});

export const updateUserCreator = () => ({type: UPDATE_USER});
export const deleteUserCreator = () => ({type: DELETE_USER});