import React from 'react';
import styled from 'styled-components';
import styles from "./Cover.module.css";
import Slider from 'react-slick';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const Img = styled.img`
    width: fit-content;
    height: 400px;
    object-fit: cover;
`

const Cover = () => {
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 2000,
    cssEase: "linear"
  };


  return (
    <div className={styles.container}>
       <Slider {...settings}>
        <Img src="covers/imgcover1.jpg" alt="" />
        <Img src="covers/imgcover2.jpg" alt="" />
        <Img src="covers/imgcover3.jpg" alt="" />
        <Img src="covers/imgcover4.jpg" alt="" />
       </Slider>
    </div>
   

  )
}

export default Cover   