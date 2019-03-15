import React from 'react';

let Button = (props) => {
    return(
        <button className={props.className} data-id={props.dataId} style={props.style} onClick={props.event}>{props.name}</button>
    )
}
export default Button;