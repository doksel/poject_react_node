import React, { Component } from 'react';
import axios from "axios";
import NewsItem from './newsItem/newsItem';

import Login from './../login/login';

class News extends Component {
    constructor(props) {
        super(props);
        this.state = {posts:[]};
    }

    getAllPost = () => {
        axios.get("http://localhost:3001/api/posts")
        .then(res => {
            this.setState({
                posts: res.data.posts
            });
        })
    }
    createPost = (e) => {
        e.preventDefault();
        let post = {
            title: document.querySelector('.titleVal').value,
            text: document.querySelector('.textVal').value
        }
        axios.post("http://localhost:3001/api/posts",post)
        .then(res => {
            this.setState({
                posts: res.data.posts
            });
        })
    }
    componentDidMount() {
        this.getAllPost();
    }
    render() {
        const { posts } = this.state;
        return(
            <div className="container">
                <div className="news">
                    <h1>News</h1>
                    <h2>Our news</h2>
                    {posts.map(post => (
                        <NewsItem post={post} key={post.id}/>
                    ))}
                    <div className="login">
                        <form id="login_form" method="post">
                            <div className="form_inner">
                                <input type="text" name="title" className="input titleVal"/>
                                <textarea name="text" id="addTask" cols="30" rows="10" className="textVal"/>
                                <button className="btn_form js-addTask" onClick={this.createPost}>add post</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        )
    }
}
export default News;