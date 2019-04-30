import React, { Component } from "react";
import foto1 from './../../../images/fotogallery/foto1.jpg';
import foto2 from './../../../images/fotogallery/foto2.jpg';
import foto3 from './../../../images/fotogallery/foto3.jpg';
import foto4 from './../../../images/fotogallery/foto4.jpg';
import foto5 from './../../../images/fotogallery/foto5.jpg';
import Slider from "react-slick";
import Lightbox from 'react-images';

export default class Gallery extends Component {
	constructor () {
		super();
		this.state = {
			lightboxIsOpen: false,
			currentImage: 0,
		};
		this.closeLightbox = this.closeLightbox.bind(this);
		this.gotoNext = this.gotoNext.bind(this);
		this.gotoPrevious = this.gotoPrevious.bind(this);
		this.gotoImage = this.gotoImage.bind(this);
		this.handleClickImage = this.handleClickImage.bind(this);
		this.openLightbox = this.openLightbox.bind(this);
  }
  getListFoto(){
    const listFoto = [
      foto1,foto2,foto3,foto4,foto5
  ];
    return listFoto;
  }
  openLightbox (index, e) {
		e.preventDefault();
		this.setState({
			currentImage: index,
			lightboxIsOpen: true,
		});
	}
    closeLightbox () {
		this.setState({
			currentImage: 0,
			lightboxIsOpen: false,
		});
	}
	gotoPrevious () {
		this.setState({
			currentImage: this.state.currentImage - 1,
		});
	}
	gotoNext () {
		this.setState({
			currentImage: this.state.currentImage + 1,
		});
	}
	gotoImage (index) {
		this.setState({
			currentImage: index,
		});
	}
	handleClickImage () {
		if (this.state.currentImage === this.getListFoto().length - 1) return;

		this.gotoNext();
	}
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
    // const listFoto = this.getListFoto();
    return (
      <div className="container">
        <div className="gallery_inner">
            <Slider {...settings}>
                {this.getListFoto().map((foto,i) => (
                    <div className="wrap_foto" key={i}>
                        <div className="wrap_foto_inner">
                            <img className="foto" src={foto} alt="" onClick={(e) => this.openLightbox(i, e)} />
                        </div>
                    </div>
                ))}
            </Slider>
            <Lightbox
                currentImage={this.state.currentImage}
                images={[{ src: foto1 }, { src: foto2 }, { src: foto3 }, { src: foto4 }, { src: foto5 }]}
                isOpen={this.state.lightboxIsOpen}
                onClickImage={this.handleClickImage}
                onClickNext={this.gotoNext}
                onClickPrev={this.gotoPrevious}
                onClose={this.closeLightbox}
            />
        </div>
      </div>
    );
  }
}