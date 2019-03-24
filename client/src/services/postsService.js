import axios from 'axios';

export const getAllPost = () => {
    return axios.get("http://localhost:3001/api/posts")
}
export const getPost = (id) => {
    return axios.get(`http://localhost:3001/api/posts/${id}`)
}
export const createPost = (post) => {
    return axios.post("http://localhost:3001/api/posts",post)
}
export const updatePost = (post) => {
    getPost(post.id)
    .then(res => {
        axios.put("http://localhost:3001/api/posts",res.data.post);
    });
}
export const deletePost = (id) => {
    return axios.delete(`http://localhost:3001/api/posts/${id}`)
}