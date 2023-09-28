import React from 'react';
import styled from 'styled-components';
import Slider from 'react-slick';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const Img = styled.img`
  width: 100%;
  height: 400px;
  object-fit: cover;

  @media(max-width:800px){
    height: auto ;
  }
`;

const Container = styled.div`
  padding-top: 20px;
  overflow-x: unset;
  max-width: 100%; /* Garante que o carrossel não ultrapasse a largura do contêiner */
`;

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
    <Container>
       <Slider {...settings}>
        <Img src="covers/imgcover1.jpg" alt="" />
        <Img src="covers/imgcover2.jpg" alt="" />
        <Img src="covers/imgcover3.jpg" alt="" />
        <Img src="covers/imgcover4.jpg" alt="" />
       </Slider>
    </Container>
   

  )
}

export default Cover   