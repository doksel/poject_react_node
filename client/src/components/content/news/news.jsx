import React, { Component } from 'react';
import axios from "axios";
import NewsItem from './newsItem/newsItem';
import {rerender} from './../../../rerender';


class News extends Component {
    constructor(props) {
        super(props);
        this.state = {posts:[], post:{}};
    }

    getAllPost = () => {
        // axios.get("http://localhost:3001/api/posts")
        // .then(res => {
        //     this.setState({
        //         posts: res.data.posts
        //     });
        // })
        // .catch(err => {
        //     console.log(err);
        // });
        this.props.getAllPost();
    }
    getPost = (id) => {
        axios.get(`http://localhost:3001/api/posts/${id}`)
        .then(res => {
            this.setState({
                post: res.data.post
            });
        })
        .catch(err => {
            console.log(err);
        });
    }
    createPost = (e) => {
        e.preventDefault();
        let post = {
            title: document.querySelector('.titleVal').value,
            text: document.querySelector('.textVal').value
        }
        axios.post("http://localhost:3001/api/posts",post)
        .then(res => {
            this.state.posts.push(res.data.post);
            this.reset();
            rerender();
        })
        .catch(err => {
            console.log(err);
        });
    }
    updatePost = (e) => {
        e.preventDefault();
        let post = {
            id: e.target.getAttribute('data-id'),
        }
        this.getPost(post.id);
        setTimeout(()=>{
            const sendPost = this.state.post;

            axios.put("http://localhost:3001/api/posts",sendPost)
            .then(res => {
                // this.reset();
                this.setState({
                    posts: res.data.post
                });
                rerender();
            })
            .catch(err => {
                console.log(err);
            });
        },700)
    }
    deletePost = (e) => {
        e.preventDefault();
        let post = {
            id: e.target.getAttribute('data-id'),
        }
        axios.delete(`http://localhost:3001/api/posts/${post.id}`)
        .then(res => {
            this.getAllPost();
            setTimeout(()=>{
                rerender();
            },400)
        })
        .catch(err => {
            console.log(err);
        });
    }
    reset = () => {
        const form = document.querySelector('#create_post_form');
        form.reset();
    }
    showFormComment = (e) => {
        e.preventDefault();

    }
    addComment = (e) => {
        e.preventDefault();

        let comment = {
            idPost: e.target.getAttribute('data-id'),
            title: "new comment",
            text: "some text new comment"
        }
        console.log(comment);
    }
    componentWillMount() {
        // debugger;
        this.getAllPost();
        console.log('componentWillMount');
        console.log('this.props');
        console.log(this.props);
        console.log('this.props.data');
        console.log(this.props.data);
        console.log('this.props.data.posts');
        console.log(this.props.data.posts);
    }    
    componentDidMount() {
        // this.getAllPost();
        // console.log('componentDidMount');
        // console.log(this.props);
        // console.log(this.props.state.posts);
    }
    render() {
        const posts = this.props.data.posts;
        return(
            <div className="container">
                <div className="news">
                    <div className="news_inner">
                        <h1>News</h1>
                        <h2>Our news</h2>
                        {posts.map(post => (
                            <div key={post.id}>
                                <NewsItem post={post} updatePost={this.updatePost} deletePost={this.deletePost} addComment={this.addComment} key={post.id}/>
                            </div>
                        ))}
                        <div className="login">
                            <form id="create_post_form" name="create_post_form" method="post">
                                <div className="form_inner">
                                    <input type="text" name="title" className="input titleVal"/>
                                    <textarea name="text" id="addTask" cols="30" rows="10" className="textVal"/>
                                    <button className="btn_form js-addTask" onClick={this.createPost}>add post</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
export default News;