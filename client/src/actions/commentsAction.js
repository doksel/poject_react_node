import {getAllCommentsDb, getCommentDb, createCommentDb, deleteCommentDb} from './../services/commentsService';

// ======== ACTION_CREATORS
export const commentsFetchDataSuccess = (comments) => {
    return {
        type: 'GET_ALL_COMMENTS', comments
    }
}
export const getCommentSuccess = (comment) => {
    return {
        type: 'GET_COMMENT', comment
    }
}

// ======== ACTIONS
export const commentsFetchData = () => {
    return (dispatch) => {
        getAllCommentsDb()
        .then(res => {
            dispatch(commentsFetchDataSuccess(res.data.comments))
        })
        .catch(err => {
            console.log(err);
        });
    }
}
export const getComment = (id) => {
    return (dispatch) => {
        getCommentDb(id)
        .then(res => {
            dispatch(getCommentSuccess(res.data.comment))
        })
        .catch(err => {
            console.log(err);
        });
    }
}
export const createComment = (comment) => {
    return (dispatch) => {
        createCommentDb(comment)
        .then(res => {
            console.log(res.data);
            getAllCommentsDb()
            .then(res => {
                dispatch(commentsFetchDataSuccess(res.data.comments))
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
export const deleteComment = (id) => {
    return (dispatch) => {
        deleteCommentDb(id)
        .then(res => {
            getAllCommentsDb()
            .then(res => {
                dispatch(commentsFetchDataSuccess(res.data.comments))
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