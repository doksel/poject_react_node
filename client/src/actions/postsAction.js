import {getAllPosts} from './../services/postsService';

export function postsFetchDataSuccess (posts) {
    return {
        type: 'GET_ALL_POSTS', posts
    }
}

export function postsFetchData () {
    return (dispatch) => {
        getAllPosts()
        .then(res => {
            console.log(res.data.posts);
            dispatch(postsFetchDataSuccess(res.data.posts))
        })
        .catch(err => {
            console.log(err);
        });
    }
}