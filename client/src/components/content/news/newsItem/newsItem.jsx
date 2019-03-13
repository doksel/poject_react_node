import React from 'react';
import  './newsItem.css';

let NewsItem = (props) => {
    return(
    <div key={props.post.id} className="news_item">
        <h3>{props.post.title}</h3>
        <div>{props.post.text}</div>
    </div>
    )
}
export default NewsItem;