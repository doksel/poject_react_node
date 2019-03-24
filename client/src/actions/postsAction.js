import {getAllPost} from './../services/postsService';

export const postsFetchDataSuccess = (posts) => ({
    type: 'GET_ALL_POSTS',
    posts
})

export const postsFetchData = () => {
    return (dispatch) => {
        getAllPost()
        // .then(res => console.log(res.data))
        .then(res => dispatch(postsFetchDataSuccess(res.data)))
        .catch(err => {
            console.log(err);
        });
    }
}