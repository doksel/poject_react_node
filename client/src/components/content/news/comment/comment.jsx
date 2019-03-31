import React from 'react';
import  './comment.css';

let Comment = (props) => {
    const date = new Date(props.comment.createdAt);
    const options = {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
        hour: 'numeric',
        minute: 'numeric'
    }
    return(
    <div key={props.comment.id} className="comment">
        <div className="comment_date">{date.toLocaleString('ru',options)}</div>
        <div className="comment_text">{props.comment.text}</div>
    </div>
    )
}
export default Comment;