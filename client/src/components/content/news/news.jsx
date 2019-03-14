import React, { Component } from 'react';
import axios from "axios";
import NewsItem from './newsItem/newsItem';

import Login from './../login/login';

class News extends Component {
    constructor(props) {
        super(props);
        this.state = {posts:[], post:{}};
    }

    getAllPost = () => {
        axios.get("http://localhost:3001/api/posts")
        .then(res => {
            this.setState({
                posts: res.data.posts
            });
        })
        .catch(err => {
            console.log(err);
        });
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
            // this.reset();
            // const blockNews = document.getElementsByClassName('news_inner');
            // let div = document.createElement("div");
            // blockNews.appendChild(this.post(res.data.post));
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
                this.reset();
                this.setState({
                    posts: res.data.post
                });
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
            console.log(res);
        })
        .catch(err => {
            console.log(err);
        });
    }
    reset = () => {
        const form = document.forms["create_post_form"];
        form.reset();
        form.elements["id"].value = 0;
    }
    post = (post) => {
        return (
            <div key={post.id}>
                <NewsItem post={post} updatePost={this.updatePost} deletePost={this.deletePost} key={post.id}/>
                <button className="btn_form btn_update" data-id={post.id} onClick={this.updatePost}>update post</button>
                <button className="btn_form btn_delete" data-id={post.id} onClick={this.deletePost}>delete post</button>            
            </div>
        )
    }
    componentDidMount() {
        this.getAllPost();
        console.log(this.state.post);
        console.log(this.state.posts);
    }
    render() {
        const { posts, post } = this.state;
        return(
            <div className="container">
                <div className="news">
                    <div className="news_inner">
                        <h1>News</h1>
                        <h2>Our news</h2>
                        {posts.map(post => (
                            <div key={post.id}>
                                <NewsItem post={post} updatePost={this.updatePost} deletePost={this.deletePost} key={post.id}/>
                                <button className="btn_form btn_update" data-id={post.id} onClick={this.updatePost}>update post</button>
                                <button className="btn_form btn_delete" data-id={post.id} onClick={this.deletePost}>delete post</button>            
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