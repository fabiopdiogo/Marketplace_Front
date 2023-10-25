import styled  from "styled-components";
import { Product } from "../../types/Product";
import { CartContext } from "../../contexts/Cart/CartContext";
import { useContext, useEffect } from "react";

interface Props{
  prod : Product;
}

function ItemCard({ prod }: Props) {
  const {_id,image_path, price} = prod;
  const id_product = _id;
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
      {cart.some((p: { id_product: string }) => p.id_product === prod._id) ? (
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
          onClick={() => {
            dispatch({
              type: 'ADD_TO_CART',
              payload: {id_product, image_path, price} // Use prod._id como payload
            })
          }}         
        >
          "Adicionar ao carrinho" 
        </ButtonAdd>
      )}
    </>
  );
}

export default ItemCard;

const Button = styled.button`
  width: 100%;
  margin-top: 2%;
  padding: 2% 5%;
  border-radius: 10px;
  border: 0;
  font-weight: bold;
  font-size: 1rem;
  cursor: pointer;
  transition: background-color 0.3s ease-in-out; /* Adicionando a transição */

  &:hover {
    background-color: ${(props) => (props.disabled ? props.theme.disabled : 'blue')};
  }

  &:disabled {
    background-color: ${(props) => props.theme.disabled};
  }
`;

const ButtonAdd = styled(Button)`
  background-color: lightblue;
`;

const ButtonRemove = styled(Button)`
  background-color: red;
`;

const Image = styled.img`
  width: 100%; 
`
const Preco = styled.h2`
  width: 100%; 
  height: 0;
`
const P = styled.p`
  width: 100%; 
`