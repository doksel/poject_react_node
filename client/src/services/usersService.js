import axios from 'axios';

export const getAllUsersDb = () => {
    return axios.get("http://localhost:3001/api/users")
}
export const getUserDb = (id) => {
    return axios.get(`http://localhost:3001/api/users/${id}`)
}
export const createUserDb = (user) => {
    return axios.post("http://localhost:3001/api/users",user)
}
export const updateUserDb = (user) => {
    return axios.put("http://localhost:3001/api/users",user);
}
export const deleteUserDb = (id) => {
    return axios.delete(`http://localhost:3001/api/users/${id}`)
}