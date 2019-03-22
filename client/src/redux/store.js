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
        newPost: {
            newPostTitle: '',
            newPostText: '',
        },
        posts: [],
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
    subscribe (observer) {
        this._rerender = observer;
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
            title: this._state.newPost.newPostTitle,
            text: this._state.newPost.newPostText
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
    updateText(newText, newTitle){
        this._state.newPost.newPostText = newText;
        this._state.newPost.newPostTitle = newTitle;
        this._rerender();
    },
    reset () {
        const form = document.querySelector('#create_post_form');
        form.reset();
    },
    dispatch(action){
        if(action.type === 'ADD-POST'){

        }else if(action.type === 'DELETE-POST'){

        }
    },
}

export default store;