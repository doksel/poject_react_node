import React from 'react';
import { NavLink } from "react-router-dom";

let Header = () => {
    <div className="header">
        <NavLink to="/" >Sort by name</NavLink>
        <NavLink to="/" >Sort by email</NavLink>
        <NavLink to="/" >Sort by status</NavLink>
    </div>
}

export default Header;