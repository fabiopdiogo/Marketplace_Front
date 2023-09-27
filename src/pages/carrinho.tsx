import {useContext, useEffect} from 'react'

import styled from "styled-components"
import { CartContext } from '../contexts/Cart/CartContext'
import { Product } from '../types/Product'
import ProdCart from '../componentes/ProdCart/ProdCart'
import { Link } from 'react-router-dom'
import Button  from '../componentes/inputs/Button'

function Carrinho (){

  const {
    state: { cart }
  } = useContext(CartContext); 

  useEffect(() => {
    console.log(cart)
  })

  const somarPrecos = (cart: Product[]) => {
    // Verifica se o vetor de produtos não está vazio
    if (cart.length === 0) {
      return 0; // Retorna 0 se o vetor está vazio
    }
    
    // Utiliza reduce para somar os preços
    const total = cart.reduce((acumulador, produto) => {
      //console.log(produto.quantity) 
      return acumulador + produto.price*produto.quantity;
    }, 0);
  
    return total;
  };           
                                 
  return(
    <Div>
      <Header>
        <Link to="/">Voltar</Link>
      </Header>
      <Main>
        <Products>            
        {
          <>
            {cart.map((prod: Product) => (
              <ProdCart key={prod._id} product={prod} />
            ))}
          </>
        }
        </Products>
        <Summary>
          <span>Subtotal: {cart.length} items</span>
          <span>Total: R${somarPrecos(cart)} </span>
          <Button>Ir para pagamento</Button>
        </Summary>
      </Main>
      <Footer>
        SAC Carrinho Telefone/Whats: (31) 9999-9999
      </Footer>
    </Div>
  )
  }

const Div =  styled.header`
  display: flex;
  flex-direction:column;
  height: 100vh;
  
  margin: 0px 20px;
`
const Header =  styled.header`
  display: flex;
  justify-content: start;
  align-items: center;
  height:30vh;
`
const Main =  styled.main`
  display: flex;  
  width:100%;
  height: 50vh;
`
const Products =  styled.div`
  display: flex;  
  width: 70%;
  flex-direction: column;
  box-sizing: border-box; 
  border-top: 1px solid gray;
  border-bottom: 1px solid gray;
`
const Summary =  styled.div`
  display: flex;
  width: 30%;
  flex-direction: column;
  box-sizing: border-box; 
  border-top: 1px solid gray;
  border-bottom: 1px solid gray;
  background-color: #353853;
  color: white;
  
`
const Footer =  styled.footer`
  display: flex;
  justify-content: center;
  align-items: center;
  height:20vh;
`
const A = styled.a`
  text-decoration: none;
  color: black;
  :hover{
    color: gray;
  }
`

export default Carrinho