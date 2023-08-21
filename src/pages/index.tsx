import React, {useState, useEffect, useContext} from 'react';
import styled from 'styled-components';
import { Route, redirect } from 'react-router-dom';

import Navbar from '../componentes/Navbar/Navbar';
import Cover from '../Sections/Cover/Cover';
import ItemCard from '../componentes/ItemsCard/ItemsCard';
import { Product } from '../types/Product';
import { AuthContext } from '../contexts/Auth/AuthContext';

export default function HomePage(){
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

  const [menuIsVisible, setMenuIsVisible] = useState(true);
  const [products, setProducts] = useState<Product[]>([]);


  const auth = useContext(AuthContext);
  useEffect(() => {
    const ListProducts = async () =>{
      const response = await auth.getProducts()
      setProducts(response)
    }
    ListProducts()
  },[auth])
 


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
                products.map((p) => (
                  <ItemCard src={p.image_path}/>
                ))
              }
            </>
          )}
          
        </ItemsSection>
      </Div>
    </Page>
  )
}

