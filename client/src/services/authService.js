import axios from 'axios';

export const loginUserDb = (user) => {
    return axios.post("http://localhost:3001/admin/login",user)
}
export const registerUserDb = (user) => {
    return axios.post(`http://localhost:3001/admin/register`,user)
}
