import React from 'react';
import style from './headerTop.module.css';
import logo from './../../../logo.svg';

let HeaderTop = () => {
    return(
        <div className="headr-top">
            <img className={style.logo} src={logo} alt="app-logo"/>
        </div>
    )
}

export default HeaderTop;