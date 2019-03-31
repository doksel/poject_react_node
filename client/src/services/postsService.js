import axios from 'axios';

export const getAllPostsDb = () => {
    return axios.get("http://localhost:3001/api/posts")
}
export const getPostDb = (id) => {
    return axios.get(`http://localhost:3001/api/posts/${id}`)
}
export const createPostDb = (post) => {
    return axios.post("http://localhost:3001/api/posts",post)
}
export const updatePostDb = (post) => {
    return axios.put("http://localhost:3001/api/posts",post);
}
export const deletePostDb = (id) => {
    return axios.delete(`http://localhost:3001/api/posts/${id}`)
}