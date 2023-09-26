import styled  from "styled-components";
import { Product } from "../../types/Product";
import { CartContext } from "../../contexts/Cart/CartContext";
import { useContext } from "react";

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
const ButtonAdd = styled.button`
  background-color: lightblue;
  padding: 5px 10px; 
  border-radius: 10px;
  border: 0;
  font-weight: bold;
  color: ${props => props.theme.white};
  font-size: 16px;
  transition: 0.3s;
  cursor: pointer;
  ${props => props.disabled && 'cursor: pointer;'}

  :hover {
    background-color: blue;
  }

  :disabled {
    background-color: ${props => props.theme.disabled};
  }
`
const ButtonRemove = styled.button`
  background-color: red;
  padding: 5px 10px; 
  border-radius: 10px;
  border: 0;
  font-weight: bold;
  color: ${props => props.theme.white};
  font-size: 16px;
  transition: 0.3s;  
  cursor: pointer;

  ${props => props.disabled && 'cursor: pointer;'}

  :hover {
    background-color: ${props => props.theme.primaryHover};
  }

  :disabled {
    background-color: ${props => props.theme.disabled};
  }
`
const Image = styled.img`
  width: 100%; 
`
const Preco = styled.h2`
  width: 100%; 
  height: 0;
`
const P = styled.p`
  width: 100%; 
  height: 0;
`
interface Props{
  prod : Product ;
}

function ItemCard({ prod }: Props) {
  const {
    state: { cart },
    dispatch
  } = useContext(CartContext);

  return (
    <>
      <Image src={prod.image_path} />
      <P>{prod.name}</P>
      <Preco>R${prod.price}</Preco>
      <P>A vista no pix</P>
      {cart.some((p: { _id: any }) => p._id === prod._id) ? (
        <ButtonRemove
          onClick={() =>
            dispatch({
              type: 'REMOVE_FROM_CART',
              payload: prod._id // Use prod._id como payload
            })
          }
        >
          Remover do Carrinho
        </ButtonRemove>
      ) : (
        <ButtonAdd
          onClick={() =>
            dispatch({
              type: 'ADD_TO_CART',
              payload: prod // Use prod diretamente como payload
            })}
        >
          "Adicionar ao carrinho" 
        </ButtonAdd>
      )}
    </>
  );
}


export default ItemCard;