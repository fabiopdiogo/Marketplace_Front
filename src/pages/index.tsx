import React, {useState} from 'react';
import styled from 'styled-components';
import { Route, redirect } from 'react-router-dom';

import Header from '../componentes/Navbar/Navbar';
import Cover from '../Sections/Cover/Cover';
import ItemCard from '../componentes/ItemsCard/ItemsCard';

export default function HomePage(){

  const [menuIsVisible, setMenuIsVisible] = useState(true);

  const Page = styled.div`
    width: 100%;
    overflow-x: hidden;
  `
  const Div = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: fit-content;
  `
  const Img = styled.img`
    width: 100vw;
  `
  const ItemsSection = styled.section`
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-gap:80px;
    width: 90%;
    justify-content: center;
    align-items:center;
    flex-wrap: wrap;

    @media(max-width: 1440px){
      grid-template-columns: repeat(3, 1fr);
      padding: 10px;      
      padding-right: 40px;
    }
    @media(max-width: 678px){
      grid-template-columns: repeat(2, 1fr);
      grid-gap:40px;
      padding-right: 40px;
    }
  `

  return(
    <Page>
      <Header setMenuIsVisible={setMenuIsVisible}></Header>
      <Cover/>
      <Img src="covers/accolades.png" />      
      <Div>
        <ItemsSection>
          <ItemCard src="items/tenis1.jpg"/>
          <ItemCard src="items/tenis2.jpg"/>
          <ItemCard src="items/tenis3.jpg"/>
          <ItemCard src="items/tenis4.jpg"/>
          <ItemCard src="items/tenis5.jpg"/>
          <ItemCard src="items/tenis6.jpg"/>
          <ItemCard src="items/tenis7.jpg"/>
        </ItemsSection>
      </Div>
    </Page>
  )
}

