import React from 'react';
import HeaderTop from './headerTop/headerTop';
import Navbar from './navbar/navbar';
import style from './header.module.css';

let Header = (props) => {
    return(
    <header className={style.header}>
        <HeaderTop />
        <Navbar navLinks={props.navLinks}/>
    </header>
    )
}

export default Header;