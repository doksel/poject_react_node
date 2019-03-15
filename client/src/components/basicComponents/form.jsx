import React from 'react';
import Button from './button';

let Form = (props) => {
    return(
        <div key={props.form.id}>
            <form id={props.form.id} action={props.form.action} method={props.form.method}>
                {props.form.inputs.map(input => (
                    <input className={textarea.className} name={textarea.name} id={textarea.id} type={input.type} value={input.value}/>
                ))}
                {props.form.textareas.map(textarea => (
                    <textarea className={textarea.className} name={textarea.name} id={textarea.id}></textarea>
                ))}
                {props.form.buttons.map(button => (
                    <Button name={button.name} className={button.className} data-id={button.dataId} style={button.style} onClick={button.event} />
                ))}
            </form>
        </div>
    )
}
export default Form;