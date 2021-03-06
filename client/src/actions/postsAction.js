import {getAllPostsDb, getPostDb, createPostDb, updatePostDb, deletePostDb} from './../services/postsService';

// ======== ACTION_CREATORS
export const postsFetchDataSuccess = (posts) => {
    return {
        type: 'GET_ALL_POSTS', posts
    }
}
export const getPostSuccess = (post) => {
    return {
        type: 'GET_POST', post
    }
}

// ======== ACTIONS
export const postsFetchData = () => {
    return (dispatch) => {
        getAllPostsDb()
        .then(res => {
            dispatch(postsFetchDataSuccess(res.data.posts))
        })
        .catch(err => {
            console.log(err);
        });
    }
}
export const getPost = (id) => {
    return (dispatch) => {
        getPostDb(id)
        .then(res => {
            dispatch(getPostSuccess(res.data.post))
        })
        .catch(err => {
            console.log(err);
        });
    }
}
export const createPost = (post) => {
    return (dispatch) => {
        createPostDb(post)
        .then(res => {
            getAllPostsDb()
            .then(res => {
                dispatch(postsFetchDataSuccess(res.data.posts))
            })
            .catch(err => {
                console.log(err);
            });
        })
        .catch(err => {
            console.log(err);
        });
    }
}
export const updatePost = (post) => {
    return (dispatch) => {
        updatePostDb(post)
        .then(res => {
            getAllPostsDb()
            .then(res => {
                dispatch(postsFetchDataSuccess(res.data.posts))
            })
            .catch(err => {
                console.log(err);
            });
        })
        .catch(err => {
            console.log(err);
        });
    }
}
export const deletePost = (id) => {
    return (dispatch) => {
        deletePostDb(id)
        .then(res => {
            getAllPostsDb()
            .then(res => {
                dispatch(postsFetchDataSuccess(res.data.posts))
            })
            .catch(err => {
                console.log(err);
            });
        })
        .catch(err => {
            console.log(err);
        });
    }
}