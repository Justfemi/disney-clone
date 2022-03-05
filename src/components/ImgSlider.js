import React from 'react';
import Styled from 'styled-components';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Slider from 'react-slick';

const ImgSlider = () => {
  let settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
  };
  return (
    <Carousel {...settings}>
      <Wrap>
        <a href="/x">
          <img src="./images/slider-badging.jpg" alt="xcv"/>
        </a>
      </Wrap>

      <Wrap>
        <a href="/x">
          <img src="./images/slider-scale.jpg" alt="xcv"/>
        </a>
      </Wrap>

      <Wrap>
        <a href="/x">
          <img src="./images/slider-badag.jpg" alt="xcv"/>
        </a>
      </Wrap>

      <Wrap>
        <a href="/x">
          <img src="./images/slider-scales.jpg" alt="xcv"/>
        </a>
      </Wrap>
    </Carousel>
  );
}

const Carousel = Styled(Slider)`
  margin-top: 20px;

  & > button {
    opacity: 0;
    height: 100%;
    width: 5vw;
    z-index: 1;

    &:hover {
      opacity: 1;
      transition: opacity .2s ease 0s;
    }
  }

  ul li button {
    &:before {
      font-size: 10px;
      color: rgb(150, 158, 171);
    }
  }

  li.slick-active button:before {
    color: white;
  }

  .slick-list {
    overflow: initial;
  }

  .slick-prev {
    left: -65px;
  }

  .slick-next {
    right: -65px;
  }
`;

const Wrap = Styled.div`
  border-radius: 4px;
  cursor: pointer;
  position: relative;

  a {
    border-radius: 4px;
    box-shadow: rgb(0 0 0 / 69%) 0 26px 30px -10px, rgb(0 0 0 / 73%) 0 16px 10px -10px; 
    cursor: pointer;
    display: block;
    padding: 4px;
    position: relative;

    img {
      width: 100%;
      height: 100%;
    }

    &:hover {
      padding: 0;
      border: 4px solid rgba(249, 249, 249, .8);
      transition: linear .8s ease-in-out;
    }
  }
`;

export default ImgSlider;