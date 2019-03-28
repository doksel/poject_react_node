import React, { Component } from 'react';
import NewsItem from './newsItem/newsItem';

import { connect } from 'react-redux';
import { postsFetchData, getPost, createPost, updatePost, deletePost }  from './../../../actions/postsAction';


class News extends Component {

    createPost = (e) => {
        e.preventDefault();
        let newPost = {
            title: document.querySelector('.titleVal').value,
            text: document.querySelector('.textVal').value
        }
        this.props.createPost(newPost)
        this.reset();
    }
    updatePost = (e) => {
        let id = e.target.getAttribute('data-id');
        let newPost = {
            id,
            _id: id,
            title: document.querySelector('.titleVal').value,
            text: document.querySelector('.textVal').value
        }
        this.props.updatePost(newPost)
    }
    deletePost = (e) => {
        let id = e.target.getAttribute('data-id');
        console.log(id);
        this.props.deletePost(id)
    }
    reset = () => {
        const form = document.querySelector('#create_post_form');
        form.reset();
    }
   
    componentWillMount() {
        this.props.getAllPost();
    }
    render() {
        const allPosts = this.props.posts;
        // if(allPosts == undefined) {return "Loading";}
        return(
            <div className="container">
                <div className="news">
                    <div className="news_inner">
                        <h1>News</h1>
                        <h2>Our news</h2>
                        {allPosts.map(post => (
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

const mapStateToProps = state => {
    return {
        posts: state.newsReducer.posts
    };
};

const mapDispatchToProps = dispatch => {
    return {
        getAllPost: () => dispatch(postsFetchData()),
        getPost: () => dispatch(getPost()),
        createPost: (post) => dispatch(createPost(post)),
        updatePost: () => dispatch(updatePost()),
        deletePost: (id) => dispatch(deletePost(id)),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(News);