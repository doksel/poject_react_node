import axios from 'axios';

export const getAllCommentsDb = () => {
    return axios.get("http://localhost:3001/api/commentsPosts")
}
export const getCommentDb = (id) => {
    return axios.get(`http://localhost:3001/api/commentsPosts/${id}`)
}
export const createCommentDb = (comment) => {
    return axios.post("http://localhost:3001/api/commentsPosts",comment)
}
export const deleteCommentDb = (id) => {
    return axios.delete(`http://localhost:3001/api/commentsPosts/${id}`)
}