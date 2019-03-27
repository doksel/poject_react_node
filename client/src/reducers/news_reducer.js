const GET_ALL_POSTS = 'GET_ALL_POSTS';
const GET_POST = 'GET_POST';
const ADD_POST = 'ADD_POST';
const UPDATE_POST = 'UPDATE_POST';
const DELETE_POST = 'DELETE_POST';


export function newsReducer (state = {posts:[], post: {}}, action = {}) {
    switch(action.type){
        case GET_ALL_POSTS:
            return {...state, posts: action.posts};
        case GET_POST:
            return {...state, post: action.post};
        case ADD_POST:
            return {...state, posts: action.posts};
        case UPDATE_POST:
            return state;
        case DELETE_POST:
            return state;
        default:
            return state;
    }
}
