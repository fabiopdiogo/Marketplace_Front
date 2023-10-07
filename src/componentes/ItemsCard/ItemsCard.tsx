import styled  from "styled-components";
import { Product } from "../../types/Product";
import { CartContext } from "../../contexts/Cart/CartContext";
import { useContext } from "react";
import { AuthContext } from "../../contexts/Auth/AuthContext";

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
interface Props{
  prod : Product;
}

function ItemCard({ prod }: Props) {
  const {
    state: { cart },
    addToCart,
    dispatch
  } = useContext(CartContext);

  const auth = useContext(AuthContext)

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
          onClick={() => {
            if(auth.user){
              addToCart((auth.user._id), prod._id, 1)
            } 
          }}         
        >
          "Adicionar ao carrinho" 
        </ButtonAdd>
      )}
    </>
  );
}


export default ItemCard;