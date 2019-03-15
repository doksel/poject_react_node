import React from 'react';
import HeaderTop from './headerTop/headerTop';
import Navbar from './navbar/navbar';
import style from './header.module.css';

let Header = () => {
    return(
    <header className={style.header}>
        <HeaderTop />
        <Navbar />
    </header>
    )
}

export default Header;