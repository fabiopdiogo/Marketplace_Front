import React, { useContext } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { Product } from '../types/Product';
import ProdCart from '../componentes/ProdCart/ProdCart';
import { AuthContext } from '../contexts/Auth/AuthContext';
import { CartContext } from '../contexts/Cart/CartContext';
import { Cart } from '../types/Cart';

function Carrinho() {
  const {dispatch } = useContext(CartContext);
  const {
    state: {cart,products},
  } = useContext(CartContext);
  //const auth = useContext(AuthContext);
  const isCartEmpty = cart.length === 0;
  const clearCartAndNavigate = () => {  
  window.alert('Compra finalizada com sucesso!');
    if (dispatch) {
      dispatch({ type: 'CLEAR_CART' });
    }
    /*
    if (finishPurchase && auth.user) {
      finishPurchase(auth.user._id);
    }
    */
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
            <span>{cart.length} items</span>
          </SpanCarrinho>
          {cart.map((prod: Cart) => (
            <ProdCart id_user ={prod.id_user} id_product = {prod.id_product} quantity={prod.quantity} />
          ))}
        </Products>
        <Summary>
          <h2>Resumo</h2>
          <span>Total: R${somarPrecos(cart,products)}</span>
          <Link to="/"><Button1 onClick={clearCartAndNavigate} disabled={isCartEmpty}>Confirmar</Button1></Link>
        </Summary>
      </Main>
      <Link to="/"><Button2 onClick={clearCartAndNavigate} disabled={isCartEmpty}>Confirmar</Button2></Link>
      <Footer>
        SAC Carrinho Telefone/Whats: (31) 9999-9999
      </Footer>
    </Div>
  );
}

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
  padding:10px 5px;
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
  cursor: pointer;

  @media (max-width: 800px) {
    display: none;
  }
  ${props => props.disabled && 'cursor: pointer;'}

  :hover {
    background-color: ${props => props.theme.primaryHover};
  }

  :disabled {
    /* Define styles for the disabled state. You can use the same styles as for the "not-allowed" cursor and gray background. */
    cursor: not-allowed;
    background-color: gray;
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
  cursor: pointer;
  @media (max-width: 800px) {
    display: block;
  }

  ${props => props.disabled && 'cursor: pointer;'}

  :hover {
    background-color: ${props => props.theme.primaryHover};
  }

  :disabled {
    /* Define styles for the disabled state. You can use the same styles as for the "not-allowed" cursor and gray background. */
    cursor: not-allowed;
    background-color: gray;
  }
`

