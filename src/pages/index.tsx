import React, {useState, useEffect, useContext} from 'react';
import styled from 'styled-components';
import { Route, redirect } from 'react-router-dom';
import Navbar from '../componentes/Navbar/Navbar';

import Cover from '../Sections/Cover/Cover';
import ItemCard from '../componentes/ItemsCard/ItemsCard';
import { Product, UseProductsContextType } from '../types/Product';
import { AuthContext } from '../contexts/Auth/AuthContext';
import { CartContext } from '../contexts/Cart/CartContext'
import Menu from '../componentes/Menu/Menu';

const Page = styled.div`
  width: 100%;
  overflow-x: hidden;
`
const Div = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
`
const Img = styled.img`
  width: 100vw;
`
const ItemsSection = styled.section`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  grid-gap:90px;
  width: 90%;
  justify-content: center;
  align-items:center;
  flex-wrap: wrap;

  @media(max-width: 935px){
    grid-template-columns: repeat(3, 1fr);
    grid-gap:40px;
    padding-right: 40px;
  }

  @media(max-width: 500px){
    grid-template-columns: repeat(2, 1fr);
    grid-gap:10px;
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
  

  const [menuIsVisible, setMenuIsVisible] = useState(false);
  //const [products, setProducts] = useState<Product[]>([]);
  const {
    state: { cart, products },
  } = useContext(CartContext);
  return(
    <Page>
      <Menu     
         menuIsVisible={menuIsVisible}
         setMenuIsVisible={setMenuIsVisible} />
      <Navbar prodNum={cart.length} setMenuIsVisible={setMenuIsVisible}/>
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

