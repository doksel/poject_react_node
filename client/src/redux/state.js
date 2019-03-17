import axios from 'axios';

let rerender = () => {}

let state = {
    testArray: [1,2,3,4,5],
    navLinks: [
        {name: 'Home', link: '/'},
        {name: 'About us', link: '/about'},
        {name: 'News', link: '/news'},
        {name: 'Contacts', link: '/contacts'},
        {name: 'login', link: '/login'},
    ],
    newText:'',
    posts:[]
}
export const getAllPost = () => {
    axios.get("http://localhost:3001/api/posts")
    .then(res => {
        state.posts = res.data.posts
    })
    .catch(err => {
        console.log(err);
    });
}
export const createPost = (post) => {
    axios.post("http://localhost:3001/api/posts",post)
    .then(res => {
        state.posts.push(res.data.post);
        rerender();
    })
    .catch(err => {
        console.log(err);
    });
}

export const updateTextPostText = (newText) => {
    state.newText = newText;
    rerender();
}

export const deletePost = (post) => {
    axios.delete(`http://localhost:3001/api/posts/${post.id}`)
    .then(res => {
        setTimeout(()=>{
            getAllPost();
            rerender();
        },400)
    })
    .catch(err => {
        console.log(err);
    });
}

export const subscribe = (observer) => {
    rerender = observer;
}

export default state;