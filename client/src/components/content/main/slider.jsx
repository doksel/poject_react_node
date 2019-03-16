import React, { Component } from "react";
import Slider from "react-slick";

export default class SimpleSlider extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 1,
      // ===== addition ====== //
      fade: false,
      centerMode: false,
      centerPadding: "60px",
      initialSlide: 2,
      lazyLoad: false,
      variableWidth: false,
      // vertical: true,
      // verticalSwiping: true,
      // beforeChange: function(currentSlide, nextSlide) {
      //   console.log("before change", currentSlide, nextSlide);
      // },
      // afterChange: function(currentSlide) {
      //   console.log("after change", currentSlide);
      // }
    };
    const listNumber = [1,2,3,4,5,6,7];
    return (
      <div className="container">
        <div className="slider">
          <h2> Single Item</h2>
          <Slider {...settings}>
            {listNumber.map(number => (
              <div className="wrap_number" key={number}>
                  <div className="number">{number}</div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    );
  }
}