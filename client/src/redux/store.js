import axios from "axios";

const store = {
    _rerender () {
        console.log('rerender');
    },
    _state: {
        testArray: [1,2,3,4,5],
        navLinks: [
            {name: 'Home', link: '/'},
            {name: 'About us', link: '/about'},
            {name: 'News', link: '/news'},
            {name: 'Contacts', link: '/contacts'},
            {name: 'login', link: '/login'},
        ],
        posts: {},
        post:{},
    },
    getState () {
        return this._state;
    },
    getAllPost () {
        axios.get("http://localhost:3001/api/posts")
        .then(res => {
            this._state.posts = res.data.posts
        })
        .catch(err => {
            console.log(err);
        });
    },
    getPost (id) {
        axios.get(`http://localhost:3001/api/posts/${id}`)
        .then(res => {
            this._state.post = res.data.post
        })
        .catch(err => {
            console.log(err);
        });
    },
    createPost (e) {
        e.preventDefault();
        let post = {
            title: document.querySelector('.titleVal').value,
            text: document.querySelector('.textVal').value
        }
        axios.post("http://localhost:3001/api/posts",post)
        .then(res => {
            this.state.posts.push(res.data.post);
            this._reset();
            this._rerender();
        })
        .catch(err => {
            console.log(err);
        });
    },
    updateText(){

    },
    subscribe (observer) {
        this._rerender = observer;
    }
}

export default store;