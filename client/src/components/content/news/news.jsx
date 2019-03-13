import React, { Component } from 'react';
import axios from "axios";
import NewsItem from './newsItem/newsItem';

import Login from './../login/login';

class News extends Component {
    constructor(props) {
        super(props);
        this.state = {posts:[]};
    }
    componentDidMount() {
        axios.get("http://localhost:3001/api/posts")
        .then(res => {
            this.setState({
                posts: res.data.posts
            });
        })
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