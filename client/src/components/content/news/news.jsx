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
            title: document.querySelector('.updatePostTitle').value,
            text: document.querySelector('.updatePostText').value
        }
        this.props.updatePost(newPost)
    }
    deletePost = (e) => {
        let id = e.target.getAttribute('data-id');
        console.log(id);
        this.props.deletePost(id)
    }
    showForm () {
        const form = document.querySelector('.update_form');
        form.style.display = 'flex'
    }
    closeForm () {
        const form = document.querySelector('.update_form');
        form.style.display = 'none'
    }
    showFormComment () {
        const form = document.querySelector('.comment_form');
        form.style.display = 'flex'
    }
    closeFormComment () {
        const form = document.querySelector('.comment_form');
        form.style.display = 'none'
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
                                <NewsItem post={post} updatePost={this.updatePost} deletePost={this.deletePost} 
                                addComment={this.addComment} showForm={this.showForm} closeForm={this.closeForm} 
                                showFormComment={this.showFormComment} closeFormComment={this.closeFormComment} key={post.id}/>
                            </div>
                        ))}
                        <div className="login">
                            <h2>Add new post</h2>
                            <form id="create_post_form" name="create_post_form" method="post">
                                <div className="form_inner">
                                    <label htmlFor="">title post</label>
                                    <input type="text" name="title" className="input titleVal"/>
                                    <label htmlFor="">text post</label>
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
        updatePost: (newPost) => dispatch(updatePost(newPost)),
        deletePost: (id) => dispatch(deletePost(id)),
    };
};

