import React from 'react';
import  './newsItem.css';

let NewsItem = (props) => {
    return(
    <div key={props.comment.id} className="comment">
        <div className="commetn_user">{props.comment.user}</div>
        <div className="commetn_text">{props.comment.text}</div>
    </div>
    )
}
export default NewsItem;