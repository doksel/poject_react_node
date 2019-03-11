import React from 'react';
import { NavLink } from "react-router-dom";

let Navbar = () => {
    return(
        <nav className="navbar">
            <NavLink to="/" className="link">Home</NavLink>
            <NavLink to="/about" >About us</NavLink>
            <NavLink to="/news" >News</NavLink>
            <NavLink to="/contacts" >Contacts</NavLink>
            <NavLink to="/login" >login</NavLink>
        </nav>
    )
}

export default Navbar;