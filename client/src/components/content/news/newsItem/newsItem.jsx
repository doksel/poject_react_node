import React from 'react';
import  './newsItem.css';

let NewsItem = (props) => {
    const date = new Date(props.post.createdAt);
    const options = {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
        hour: 'numeric',
        minute: 'numeric'
    }
    return(
    <div key={props.post.id} className="news_item">
        <h3>{props.post.title}</h3>
        <h4>{date.toLocaleString('ru',options)}</h4>
        <div>{props.post.text}</div>
        <div className="comment"></div>
        <div className="wrap_buttons">
            <button className="btn_form btn_showForm" data-id={props.post.id} onClick={props.showForm}>update post</button>
            <button className="btn_form btn_delete" data-id={props.post.id} onClick={props.deletePost}>delete post</button>
            <button className="btn_form btn_comment" data-id={props.post.id} onClick={props.showFormComment}>add comment</button>
        </div>
        <div className="update_form" data-id={props.post.id}>
            <span className="close_form" data-id={props.post.id} onClick={props.closeForm}>X</span>
            <form className="updatePost" data-id={props.post.id}>
                <h2>update "{props.post.title}"</h2>
                <label htmlFor="updatePostTitle">title post</label>
                <input className="input updatePostTitle" id="updatePostTitle" data-id={props.post.id} type="text" name="title"/>
                <label htmlFor="updatePostText">text post</label>
                <textarea className="updatePostText" id="updatePostText" data-id={props.post.id} cols="30" rows="10" name="text"/>
                <button className="btn_form btn_update" data-id={props.post.id} onClick={props.updatePost}>update post</button>
            </form>
        </div>
        <div className="comment_form" data-id={props.post.id}>
            <span className="close_form" data-id={props.post.id} onClick={props.closeFormComment}>X</span>
            <form className="addComment" data-id={props.post.id}>
                <h2>Add our comment to "{props.post.title}"</h2>
                <textarea className="commentPost" id="commentPost" cols="50" rows="5" name="text"/>
                <button className="btn_form btn_update" data-id={props.post.id} onClick={props.createComment}>add comment</button>
            </form>
        </div>
    </div>
    )
}
export default NewsItem;