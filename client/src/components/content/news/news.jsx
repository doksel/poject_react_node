import React, { Component } from 'react';
import  './news.css';
import NewsItem from './newsItem/newsItem';
import Comment from './comment/comment';

import { connect } from 'react-redux';
import { postsFetchData, getPost, createPost, updatePost, deletePost }  from './../../../actions/postsAction';
import { commentsFetchData, getComment, createComment, deleteComment}  from './../../../actions/commentsAction';


class News extends Component {

    createPost = (e) => {
        e.preventDefault();
        let newPost = {
            title: document.querySelector('.titleVal').value.trim().replace(/ +(?= )/g, ''),
            text: document.querySelector('.textVal').value,
            comments: false
        }
        this.props.createPost(newPost)
        this.reset();
    }
    updatePost = (e) => {
        e.preventDefault();
        let id = e.target.getAttribute('data-id');
        let forms = document.querySelectorAll('.updatePost');
        let newPost;
        forms.forEach((form)=>{  
            if(id === form.getAttribute('data-id')){
                let elemTitle = form.querySelector('.updatePostTitle');
                let elemText = form.querySelector('.updatePostText');
                if(elemTitle && elemText){
                    newPost = {
                        id,
                        _id: id,
                        title: elemTitle.value.trim().replace(/ +(?= )/g, ''),
                        text: elemText.value,
                    }
                }
            }
        })
        this.props.updatePost(newPost);
        this.reset();
    }
    deletePost = (e) => {
        let id = e.target.getAttribute('data-id');
        this.props.deletePost(id)
    }
    showForm (e) {
        let dataId = e.target.getAttribute('data-id');
        const forms = document.querySelectorAll('.update_form');
        forms.forEach((item)=>{
            if(item.getAttribute('data-id')===dataId){
                item.style.display = 'flex'
            }
        })
    }
    closeForm (e) {
        let dataId = e.target.getAttribute('data-id');
        const forms = document.querySelectorAll('.update_form');
        forms.forEach((item)=>{
            if(item.getAttribute('data-id')===dataId){
                item.style.display = 'none'
            }
        })
    }
    showFormComment (e) {
        let dataId = e.target.getAttribute('data-id');
        const forms = document.querySelectorAll('.comment_form');
        forms.forEach((item)=>{
            if(item.getAttribute('data-id')===dataId){
                item.style.display = 'flex'
            }
        })
    }
    closeFormComment (e) {
        let dataId = e.target.getAttribute('data-id');
        const forms = document.querySelectorAll('.comment_form');
        forms.forEach((item)=>{
            if(item.getAttribute('data-id')===dataId){
                item.style.display = 'none'
            }
        })
    }
    createComment = (e) => {
        e.preventDefault();
        let id = e.target.getAttribute('data-id');
        const forms = document.querySelectorAll('.addComment');
        let newComment;
        forms.forEach((form)=>{
            if(id===form.getAttribute('data-id')){
                let elemText = form.querySelector('.commentPost');
                if(elemText){
                    newComment = {
                        text: elemText.value,
                        idPost: id
                    }
                }
            }
        })
        this.props.createComment(newComment);
        this.reset();
    }
    reset = () => {
        const form = document.querySelector('#create_post_form');
        const formUpdatePostAll = document.querySelectorAll('.updatePost');
        const formComentAll = document.querySelectorAll('.addComment');
        
        if(form){
            form.reset();
        }
        if(formUpdatePostAll.length > 0){
            formUpdatePostAll.forEach((form)=>{
                form.reset();
            })
            document.querySelectorAll('.update_form').forEach((form)=>{
                form.style.display = 'none'
            })
        }
        if(formComentAll.length > 0){            
            formComentAll.forEach((form)=>{
                form.reset();
            })
            document.querySelectorAll('.comment_form').forEach((form)=>{
                form.style.display = 'none'
            })
        }
    }
   
    componentWillMount() {
        this.props.getAllPost();
        this.props.getAllComments();
    }
    render() {
        const allPosts = this.props.posts;
        const allComments = this.props.comments;
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
                                showFormComment={this.showFormComment} closeFormComment={this.closeFormComment}
                                createComment={this.createComment} key={post.id}/>
                                <div className="comments_list">
                                    {/* <h3>Comments:</h3> */}
                                    {allComments.map(comment => {
                                        if(comment.idPost===post.id){
                                            return (
                                                <div key={comment.id}>
                                                    <Comment comment={comment} />
                                                </div>
                                            )
                                        }
                                    })}
                                </div>
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
        posts: state.newsReducer.posts,
        comments: state.commentsReducer.comments
    };
};

const mapDispatchToProps = dispatch => {
    return {
        getAllPost: () => dispatch(postsFetchData()),
        getPost: () => dispatch(getPost()),
        createPost: (post) => dispatch(createPost(post)),
        updatePost: (newPost) => dispatch(updatePost(newPost)),
        deletePost: (id) => dispatch(deletePost(id)),
        getAllComments: () => dispatch(commentsFetchData()),
        createComment: (newComment) => dispatch(createComment(newComment))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(News);