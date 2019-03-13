import React from 'react';
import { NavLink } from "react-router-dom";
import "./navbar.css";

let Navbar = () => {
    const navLinks = [
        {name: 'Home', link: '/'},
        {name: 'About us', link: '/about'},
        {name: 'News', link: '/news'},
        {name: 'Contacts', link: '/contacts'},
        {name: 'login', link: '/login'},
    ];
    return(
        <nav className="navbar">
            {navLinks.map(link => (
                <NavLink to={link.link} className="link" key={link.name}>
                    <span className="link_inner">
                        <span className="link_tr_l">
                            <span>{link.name}</span>
                        </span>
                        <span className="link_tr_r">
                            <span>{link.name}</span>
                        </span>
                        <span className="link_tr_c">
                            <span>{link.name}</span>
                        </span>
                    </span>
                </NavLink>
            ))}
        </nav>
    )
}

export default Navbar;