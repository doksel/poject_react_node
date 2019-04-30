import axios from 'axios';

export const loginUserDb = (user) => {
    return axios.post("http://localhost:3001/auth/login",user)
}
export const registerUserDb = (user) => {
    return axios.post(`http://localhost:3001/auth/register`,user)
}
export const authUserSession = () => {
    return axios.get(`http://localhost:3001/`)
}