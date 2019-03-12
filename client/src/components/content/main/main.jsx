import React, { Component } from 'react';
import banner from './../../../images/main_banner.jpg';
import './main.css';
import SimpleSlider from './slider';
import Gallery from './gallery';

const Main_banner = () => {
    return (
        <div className="main">
            <div className="main_banner">
                <div className="animate_text">Hello...</div>
                <img src={banner} alt="main_banner" title="main_banner"/>
            </div>
            <div className="main_slider">
                < SimpleSlider />
            </div>
            <div>
                <Gallery />
            </div>
        </div>

    )
}
export default Main_banner;