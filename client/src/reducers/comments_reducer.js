const GET_ALL_COMMENTS = 'GET_ALL_COMMENTS';
const GET_COMMENT = 'GET_COMMENT';


export function commentsReducer (state = {comments:[], comment: {}}, action = {}) {
    switch(action.type){
        case GET_ALL_COMMENTS:
            return {...state, comments: action.comments};
        case GET_COMMENT:
            return {...state, comment: action.comment};
        default:
            return state;
    }
}
