import React from "react"
import Slider from "react-slick"
import Title from './main-title'

import '../styles/carousel/slick.css'
import CarouselStyle from '../styles/carousel.module.scss'

class SimpleSlider extends React.Component {
  render() {
    const settings = {
      dots: true,
      arrows: false,
      infinite: true,
      speed: 4000,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 7000,
      dotsClass: 'slick-dots custom_dots'
    };
    return (
      <div className="container"
      style={{ padding: `10% 0` }}>
        <Title
        h3="CLIENT SAY ABOUT ME"
        p="Is give may shall likeness made yielding spirit a itself togeth created after sea is in beast beginning signs open god you're gathering ithe" />
        <Slider {...settings}>
        <div className="d-flex justify-content-between flex-wrap">
          <div className={CarouselStyle.carousel_bg}>
            <div className="d-flex align-items-center">
              <img className={CarouselStyle.img_container} src="./images/carousel/t1.jpg" alt="testimonials, t1"/>
              <div className={CarouselStyle.item_container}>
                <h5>ELITE MARTIN</h5>
                <p>Him, made can't called over won't there on divide there male fish beast own his day third seed sixth seas unto. Saw from</p>
              </div>
            </div>
          </div>
          <div className={CarouselStyle.carousel_bg}>
            <div className="d-flex align-items-center">
              <img className={CarouselStyle.img_container} src="./images/carousel/t2.jpg" alt="testimonials, t2"/>
              <div className={CarouselStyle.item_container}>
                <h5>DAVIL SADEN</h5>
                <p>Him, made can't called over won't there on divide there male fish beast own his day third seed sixth seas unto. Saw from</p>
              </div>
            </div>
          </div>
        </div>
        <div className="d-flex justify-content-between flex-wrap">
          <div className={CarouselStyle.carousel_bg}>
            <div className="d-flex align-items-center">
              <img className={CarouselStyle.img_container} src="./images/carousel/t1.jpg" alt="testimonials, t1"/>
              <div className={CarouselStyle.item_container}>
                <h5>ELITE MARTIN</h5>
                <p>Him, made can't called over won't there on divide there male fish beast own his day third seed sixth seas unto. Saw from</p>
              </div>
            </div>
          </div>
          <div className={CarouselStyle.carousel_bg}>
            <div className="d-flex align-items-center">
              <img className={CarouselStyle.img_container} src="./images/carousel/t2.jpg" alt="testimonials, t2"/>
              <div className={CarouselStyle.item_container}>
                <h5>DAVIL SADEN</h5>
                <p>Him, made can't called over won't there on divide there male fish beast own his day third seed sixth seas unto. Saw from</p>
              </div>
            </div>
          </div>
        </div>
        <div className="d-flex justify-content-between flex-wrap">
          <div className={CarouselStyle.carousel_bg}>
            <div className="d-flex align-items-center">
              <img className={CarouselStyle.img_container} src="./images/carousel/t1.jpg" alt="testimonials, t1"/>
              <div className={CarouselStyle.item_container}>
                <h5>ELITE MARTIN</h5>
                <p>Him, made can't called over won't there on divide there male fish beast own his day third seed sixth seas unto. Saw from</p>
              </div>
            </div>
          </div>
          <div className={CarouselStyle.carousel_bg}>
            <div className="d-flex align-items-center">
              <img className={CarouselStyle.img_container} src="./images/carousel/t2.jpg" alt="testimonials, t2"/>
              <div className={CarouselStyle.item_container}>
                <h5>DAVIL SADEN</h5>
                <p>Him, made can't called over won't there on divide there male fish beast own his day third seed sixth seas unto. Saw from</p>
              </div>
            </div>
          </div>
        </div>
        </Slider>
      </div>
    );
  }
}
export default SimpleSlider
