const GET_ALL_POSTS = 'GET_ALL_POSTS';
const ADD_POST = 'ADD_POST';
const UPDATE_TEXT_NEW_POST = 'UPDATE_TEXT_NEW_POST';
const UPDATE_POST = 'UPDATE_POST';
const DELETE_POST = 'DELETE_POST';


export function newsReducer (state = {}, action = {}) {
    switch(action.type){
        case GET_ALL_POSTS:
            return {...state, posts: action.posts};
        case ADD_POST:
            return state;
        case UPDATE_TEXT_NEW_POST:
            return state;
        case UPDATE_POST:
            return state;
        case DELETE_POST:
            return state;
        default:
            return state;
    }
}
