import {getAllUsersDb, getUserDb, createUserDb, updateUserDb, deleteUserDb} from '../services/usersService';

// ======== ACTION_CREATORS
export const getAllUsersSuccess = (users) => {
    return {
        type: 'GET_ALL_USERS', users
    }
}
export const getUserSuccess = (user) => {
    return {
        type: 'GET_USER', user
    }
}

// ======== ACTIONS
export const getAllUsers = () => {
    return (dispatch) => {
        getAllUsersDb()
        .then(res => {
            dispatch(getAllUsersSuccess(res.data.users))
        })
        .catch(err => {
            console.log(err);
        });
    }
}
export const getUser = (id) => {
    return (dispatch) => {
        getUserDb(id)
        .then(res => {
            dispatch(getUserSuccess(res.data.user))
        })
        .catch(err => {
            console.log(err);
        });
    }
}
export const createUser = (user) => {
    return (dispatch) => {
        createUserDb(user)
        .then(res => {
            getAllUsersDb()
            .then(res => {
                dispatch(getAllUsersSuccess(res.data.users))
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
export const updateUser = (user) => {
    return (dispatch) => {
        updateUserDb(user)
        .then(res => {
            getAllUsersDb()
            .then(res => {
                dispatch(getAllUsersSuccess(res.data.users))
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
export const deleteUser = (id) => {
    return (dispatch) => {
        deleteUserDb(id)
        .then(res => {
            getAllUsersDb()
            .then(res => {
                dispatch(getAllUsersSuccess(res.data.users))
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