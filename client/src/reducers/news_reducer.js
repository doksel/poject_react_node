const GET_ALL_POSTS = 'GET_ALL_POSTS';
const GET_POST = 'GET_POST';


export function newsReducer (state = {posts:[], post: {}}, action = {}) {
    switch(action.type){
        case GET_ALL_POSTS:
            return {...state, posts: action.posts};
        case GET_POST:
            return {...state, post: action.post};
        default:
            return state;
    }
}
