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
        {/* <h4>{date.toLocaleString()}</h4> */}
        <div>{props.post.text}</div>
        <div className="wrap_buttons">
            <button className="btn_form btn_update" data-id={props.post.id} onClick={props.updatePost}>update post</button>
            <button className="btn_form btn_delete" data-id={props.post.id} onClick={props.deletePost}>delete post</button>
            <button className="btn_form btn_comment" data-id={props.post.id} onClick={props.addComment}>add comment</button>
        </div>
    </div>
    )
}
export default NewsItem;