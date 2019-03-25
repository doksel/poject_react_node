import React, { Component } from 'react';
import NewsItem from './newsItem/newsItem';

import { connect } from 'react-redux';
import { postsFetchData }  from './../../../actions/postsAction';


class News extends Component {
   
    componentWillMount() {
        this.props.getAllPost();
        console.log('componentWillMount')
        console.log(this.props)
    }
    render() {
        console.log('render')
        console.log(this.props);
        const allPosts = this.props.posts;
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
        getAllPost: () => dispatch(postsFetchData())
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(News);