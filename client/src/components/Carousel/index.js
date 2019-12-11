import React, { Component } from "react";
import Slider from "react-slick";
// import Container from '@material-ui/core/Container'
import Tanner1 from "../../photos/Tanner1.jpg"
import Tanner3 from "../../photos/Tanner3.jpg"
import Tanner6 from "../../photos/Tanner6.jpg"




export default class SimpleSlider extends Component {
  render() {
    const settings = {
      arrows: false,
      dots: true,
      infinite: true,
      speed: 800,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 5000,
      responsive: [
        {
          breakpoint: 600,
          settings: {
            arrows: false,
            centerMode: true,
            dots: false,
            centerPadding: '40px',
            slidesToShow: 1
          }
        }]
    };
    return (
      <div>
        {/* <Container style={{marginTop: 3}}> */}
          <Slider {...settings}>
            <div>
              <img style={{ width: '100%' }} src={Tanner1} alt='pic' />
            </div>
            <div>
              <img style={{ width: '100%' }} src={Tanner3} alt='pic' />
            </div>
            <div>
              <img style={{ width: '100%' }} src={Tanner6} alt='pic' />
            </div>
          </Slider>
        {/* </Container> */}
      </div>
    );
  }
}