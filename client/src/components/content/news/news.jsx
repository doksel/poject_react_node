import React, { Component } from 'react';
import axios from "axios";
import NewPost from './newPost';

import Login from './../login/login';

class News extends Component {
    constructor(props) {
        super(props);
        this.state = {users:[],posts:[]};
    }
    componentDidMount() {
        axios.get("http://localhost:3001/api/posts")
        .then(res => {
            this.setState({
                posts: res.data.posts
            });
        });
    }
    render() {
        const { posts } = this.state;
        return(
            <div className="cotainer">
                <div className="news">
                    <h1>News</h1>
                    <h2>Our news</h2>
                    {posts.map(user => (
                        <div>
                            <h3>{post.title}</h3>
                            <div key={post.id}>
                                {post.text}
                            </div>
                        </div>
                    ))}
                    <div className="login">
                        <form id="login_form">
                            <div className="form_inner">
                                <textarea name="task" id="addTask" cols="30" rows="10"/>
                                <button className="btn_form js-addTask">add task</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        )
    }
}
export default News;