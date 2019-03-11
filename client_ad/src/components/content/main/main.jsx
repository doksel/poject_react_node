import React, { Component } from 'react';
import banner from './../../../images/main_banner.jpg';
import './main.css';

const Main_banner = () => {
    return (
        <div className="main_banner">
            <div className="animate_text">Hello...</div>
            <img src={banner} alt="main_banner" title="main_banner"/>
        </div>
    )
}
export default Main_banner;