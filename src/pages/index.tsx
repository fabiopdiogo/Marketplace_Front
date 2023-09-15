import React, {useState, useEffect, useContext} from 'react';
import styled from 'styled-components';
import { Route, redirect } from 'react-router-dom';
import Navbar from '../componentes/Navbar/Navbar';

import Cover from '../Sections/Cover/Cover';
import ItemCard from '../componentes/ItemsCard/ItemsCard';
import { Product, UseProductsContextType } from '../types/Product';
import { AuthContext } from '../contexts/Auth/AuthContext';
import { CartContext } from '../contexts/Cart/CartContext'

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
  const Card = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%; /* Largura fixa da div pai */
  height: auto; /* Altura fixa da div pai */
  padding: 15px;
  margin-bottom: 20px;
  &:hover{
    box-shadow:
    0px 0px 4px rgba(0, 0, 0, 0.2), /* Sombra fraca em todas as direções */
    8px 0px 8px -4px rgba(0, 0, 0, 0.2); /* Sombra mais forte na direita */
  }
`
export default function HomePage(){
  

  const [menuIsVisible, setMenuIsVisible] = useState(true);
  //const [products, setProducts] = useState<Product[]>([]);
  const {state: { products }} = useContext(CartContext);

  return(
    <Page>
      <Navbar setMenuIsVisible={setMenuIsVisible}></Navbar>
      <Cover/>
      <Img src="covers/accolades.png" />      
      <Div>
        <ItemsSection>
          {products.length > 0 && (
            <>
              {
                products.map((p: Product) => (
                  <Card>
                    <ItemCard prod={p}/>
                  </Card>
                ))
              }
            </>
          )}
          
        </ItemsSection>
      </Div>
    </Page>
  )
}

