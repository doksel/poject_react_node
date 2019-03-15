import React from 'react';
import  './newsItem.css';

let NewsItem = (props) => {
    return(
    <div key={props.post.id} className="news_item">
        <h3>{props.post.title}</h3>
        <div>{props.post.text}</div>
        <div className="wrap_buttons">
            <button className="btn_form btn_update" data-id={props.post.id} onClick={props.updatePost}>update post</button>
            <button className="btn_form btn_delete" data-id={props.post.id} onClick={props.deletePost}>delete post</button>
        </div>
    </div>
    )
}
export default NewsItem;