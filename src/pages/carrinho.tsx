import React, { useContext, useEffect, useState } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { Product } from '../types/Product';
import ProdCart from '../componentes/ProdCart/ProdCart';
import { AuthContext } from '../contexts/Auth/AuthContext';
import { CartContext } from '../contexts/Cart/CartContext';
import { Cart } from '../types/Cart';

function Carrinho() {
  const { getCartProducts,finishPurchase, dispatch } = useContext(CartContext);
  const {
    state: {products},
  } = useContext(CartContext);

  const [cartItems, setCartItems] = useState<Cart[]>([]);
  const auth = useContext(AuthContext);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await getCartProducts(auth.user?._id); 
        if (Array.isArray(response.cartItems)) {
          setCartItems(response.cartItems);
        } else {
          console.error('Erro ao buscar produtos do carrinho. A resposta não é um array:', response);
        }
      } catch (error) {
        console.error('Erro ao buscar produtos do carrinho:', error);
      }
    };

    fetchData();
  }, [auth.user?._id, getCartProducts]);

  const clearCartAndNavigate = () => {
    dispatch({ type: 'CLEAR_CART' });
    finishPurchase(auth.user?._id); 

  };

  const somarPrecos = (items: Cart[], products: Product[]) => {
    let total = 0;
  
    for (const item of items) {
      const product = products.find((prod) => prod._id === item.id_product);
      if (product) {
        total += product.price * item.quantity;
      }
    }
  
    return total;
  };
  return (
    <Div>
      <Header>
        <h1>Calçados</h1>
        <Link to="/">Voltar</Link>
      </Header>
      <Main>
        <Products>
          <SpanCarrinho>
            <h1>Carrinho</h1>
            <span>{cartItems.length} items</span>
          </SpanCarrinho>
          {cartItems.map((prod: Cart) => (
            <ProdCart id_user ={prod.id_user} _id = {prod.id_product} quantity={prod.quantity} />
          ))}
        </Products>
        <Summary>
          <h2>Resumo</h2>
          <span>Total: R${somarPrecos(cartItems,products)}</span>
          <Link to="/"><Button1 onClick={clearCartAndNavigate}>Confirmar</Button1></Link>
        </Summary>
      </Main>
      <Link to="/"><Button2 onClick={clearCartAndNavigate}>Confirmar</Button2></Link>
      <Footer>
        SAC Carrinho Telefone/Whats: (31) 9999-9999
      </Footer>
    </Div>
  );
}

// Restante do código permanece o mesmo

export default Carrinho;


const Div = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  margin: 0px 20px;
  gap:10px;
`;

const SpanCarrinho = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 10px;
  align-items: center;
`;
const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 30vh;
`;

const Main = styled.main`
  display: flex;
  flex-direction: column;

  @media (min-width: 800px) {
    flex-direction: row;
  }
`;

const Products = styled.div`
  width: 70%;
  flex-direction: column;
  box-sizing: border-box;

  @media (max-width: 800px) {
    width: 100%;
  }
`;

const Summary = styled.div`
  display: flex;
  width: 30%;
  flex-direction: column;
  box-sizing: border-box;
  background-color: #353853;
  color: white;

  @media (max-width: 800px) {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    width: 100%;
  }
`;

const Footer = styled.footer`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 20vh;
`;

const Button1 = styled.button`
  background-color: blue;
  width: 100%;
  margin-top: 10px;
  padding: 5px 20px; 
  border-radius: 10px;
  border: 0;
  font-weight: bold;
  color: ${props => props.theme.white};
  font-size: 16px;

  @media (max-width: 800px) {
    display: none;
  }
  ${props => props.disabled && 'cursor: pointer;'}

  :hover {
    background-color: ${props => props.theme.primaryHover};
  }

  :disabled {
    background-color: ${props => props.theme.disabled};
  }
`
const Button2 = styled.button`
  display: none;
  background-color: blue;
  margin: 10px 0;
  width: 100%;
  padding: 10px 20px; 
  border-radius: 10px;
  border: 0;
  font-weight: bold;
  color: ${props => props.theme.white};
  font-size: 16px;

  @media (max-width: 800px) {
    display: block;
  }

  ${props => props.disabled && 'cursor: pointer;'}

  :hover {
    background-color: ${props => props.theme.primaryHover};
  }

  :disabled {
    background-color: ${props => props.theme.disabled};
  }
`

