import React from 'react';
import HeaderTop from './headerTop/headerTop';
import Navbar from './navbar/navbar';

let Header = () => {
    return(
    <header className="App-header">
        <HeaderTop />
        <Navbar />
    </header>
    )
}

export default Header;