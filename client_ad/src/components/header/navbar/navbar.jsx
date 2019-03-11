import React from 'react';
import { NavLink } from "react-router-dom";
import "./navbar.css";

let Navbar = () => {
    return(
        <nav className="navbar">
            <NavLink to="/" className="link">
            <span className="link_inner">
                <span className="link_tr_l">
                    <span>Home</span>
                </span>
                <span className="link_tr_r">
                    <span>Home</span>
                </span>
                <span className="link_tr_c">
                    <span>Home</span>
                </span>
            </span>
            </NavLink>
            <NavLink to="/about"  className="link">
            <span className="link_inner">
                <span className="link_tr_l">
                    <span>About us</span>
                </span>
                <span className="link_tr_r">
                    <span>About us</span>
                </span>
                <span className="link_tr_c">
                    <span>About us</span>
                </span>
            </span>
            </NavLink>
            <NavLink to="/news"  className="link">
            <span className="link_inner">
                <span className="link_tr_l">
                    <span>News</span>
                </span>
                <span className="link_tr_r">
                    <span>News</span>
                </span>
                <span className="link_tr_c">
                    <span>News</span>
                </span>
            </span>
            </NavLink>
            <NavLink to="/contacts"  className="link">
            <span className="link_inner">
                <span className="link_tr_l">
                    <span>Contacts</span>
                </span>
                <span className="link_tr_r">
                    <span>Contacts</span>
                </span>
                <span className="link_tr_c">
                    <span>Contacts</span>
                </span>
            </span>
            </NavLink>
            <NavLink to="/login"  className="link">
            <span className="link_inner">
                <span className="link_tr_l">
                    <span>login</span>
                </span>
                <span className="link_tr_r">
                    <span>login</span>
                </span>
                <span className="link_tr_c">
                    <span>login</span>
                </span>
            </span>
            </NavLink>
        </nav>
    )
}

export default Navbar;