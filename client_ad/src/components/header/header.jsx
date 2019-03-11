import React from 'react';
import HeaderTop from './headerTop/headerTop';
import Navbar from './navbar/navbar';

let Header = () => {
    return(
    <header className="header">
        <HeaderTop />
        <Navbar />
    </header>
    )
}

export default Header;