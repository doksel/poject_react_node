import React from 'react';
import { NavLink } from "react-router-dom";

let Header = () => {
    return(
    <header className="App-header">
        <NavLink to="/" >Sort by name</NavLink>
        <NavLink to="/" >Sort by email</NavLink>
        <NavLink to="/" >Sort by status</NavLink>
        <NavLink to="/login" >login</NavLink>
    </header>
    )
}

export default Header;