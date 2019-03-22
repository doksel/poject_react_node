const ADD_POST = 'ADD_POST';
const UPDATE_TEXT_NEW_POST = 'UPDATE_TEXT_NEW_POST';
const UPDATE_POST = 'UPDATE_POST';
const DELETE_POST = 'DELETE_POST';

let initialState = {};

const newsReducer = (state = initialState, action = initialState) => {
    switch(action.type){
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

export const createPostCreator = () => ({type: ADD_POST});
export const updateTextPostCreator = (text) => ({
    type: UPDATE_TEXT_NEW_POST,
    text: text
});
export const updatePostCreator = () => ({type: UPDATE_POST});
export const deletePostCreator = () => ({type: DELETE_POST});