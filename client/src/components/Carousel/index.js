import React, { Component } from "react";
import Slider from "react-slick";
import Tanner2 from "../../photos/Tanner1.jpg"
import Tanner4 from "../../photos/Tanner3.jpg"
import Tanner7 from "../../photos/Tanner6.jpg"
// import Tanner8 from "../../photos/Tanner8.jpg"
// import Tanner9 from "../../photos/Tanner9.jpg"
// import Tanner10 from "../../photos/Tanner10.jpg"



export default class SimpleSlider extends Component {
  render() {
    const settings = {
      dots: false,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 5000
    };
    return (
      <div>
        <Slider {...settings}>
          <div>
          <img style={{width: '100%'}} src={Tanner2} alt='pic' />
          </div>
          <div>
          <img style={{width: '100%'}} src={Tanner4} alt='pic' />
          </div>
          <div>
          <img style={{width: '100%'}} src={Tanner7} alt='pic' />
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