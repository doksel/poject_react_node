import React, { Component } from "react";
import foto1 from './../../../images/fotogallery/foto1.jpg';
import foto2 from './../../../images/fotogallery/foto2.jpg';
import foto3 from './../../../images/fotogallery/foto3.jpg';
import foto4 from './../../../images/fotogallery/foto4.jpg';
import foto5 from './../../../images/fotogallery/foto5.jpg';
import Slider from "react-slick";

export default class Gallery extends Component {
  render() {
    const settings = {
      dots: false,
      infinite: true,
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 1,
      // ===== addition ====== //
      fade: false,
      centerMode: false,
      centerPadding: "60px",
      initialSlide: 1,
      lazyLoad: false,
      variableWidth: false,
    };
    const listFoto = [
        foto1,foto2,foto3,foto4,foto5
    ];
    return (
      <div className="container">
        <div className="gallery_inner">
            {/* <h2>Gallery</h2> */}
            <Slider {...settings}>
                {listFoto.map(foto => (
                    <div className="wrap_foto" key={foto.id}>
                        <div className="wrap_foto_inner">
                            <img className="foto" src={foto} alt="image"/>
                        </div>
                    </div>
                ))}
            </Slider>
        </div>
      </div>
    );
  }
}