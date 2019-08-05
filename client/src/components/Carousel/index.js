import React, { Component } from "react";
import Slider from "react-slick";
import Tanner1 from "../../photos/Tanner1.jpg"
import Tanner3 from "../../photos/Tanner3.jpg"
import Tanner6 from "../../photos/Tanner6.jpg"
// import Tanner8 from "../../photos/Tanner8.jpg"
// import Tanner9 from "../../photos/Tanner9.jpg"
// import Tanner10 from "../../photos/Tanner10.jpg"



export default class SimpleSlider extends Component {
  render() {
    const settings = {
      arrows: false,
      dots: true,
      infinite: true,
      speed: 750,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 5000,
      responsive: [
      {
        breakpoint: 600,
        settings: {
          arrows: false,
          dots: false,
          centerMode: true,
          centerPadding: '40px',
          slidesToShow: 1
        }
      }]
    };
    return (
      <div>
        <Slider {...settings}>
          <div>
          <img style={{width: '100%'}} src={Tanner1} alt='pic' />
          </div>
          <div>
          <img style={{width: '100%'}} src={Tanner3} alt='pic' />
          </div>
          <div>
          <img style={{width: '100%'}} src={Tanner6} alt='pic' />
          </div>
          {/* <div>
          <img style={{width: '100%'}} src={Tanner8} alt='pic' />
          </div>
          <div>
          <img style={{width: '100%'}} src={Tanner9} alt='pic' />
          </div>
          <div>
          <img style={{width: '100%'}} src={Tanner10} alt='pic' />
          </div> */}
        </Slider>
      </div>
    );
  }
}