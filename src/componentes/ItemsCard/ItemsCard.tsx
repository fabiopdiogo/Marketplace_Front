import styled  from "styled-components";
import { Product } from "../../types/Product";
import { truncate } from "fs";

const Card = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%; /* Largura fixa da div pai */
  height: auto; /* Altura fixa da div pai */
  padding: 15px;
  margin-bottom: 20px;
  cursor: pointer;  
  &:hover{
    box-shadow:
    0px 0px 4px rgba(0, 0, 0, 0.2), /* Sombra fraca em todas as direções */
    8px 0px 8px -4px rgba(0, 0, 0, 0.2); /* Sombra mais forte na direita */
  }
`
const Button = styled.button`
  background-color: ${props => props.theme.primary};
  padding: 5px 10px; 
  border-radius: 10px;
  border: 0;
  font-weight: bold;
  color: ${props => props.theme.white};
  font-size: 16px;
  transition: 0.3s;

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

  const checkDisabled = () => {
    if (prod.amount > 0) return true;
    else return false;
  };

  return (
    <Card>
      <Image src={prod.image_path} />
      <P>{prod.name}</P>
      <Preco>R$ 200</Preco>
      <P>A vista no pix</P>
      <Button>Remover do Carrinho</Button>
      <Button disabled={checkDisabled()}>
        {!checkDisabled() ? "Sem estoque" : "Adicionar ao carrinho"}
      </Button>
    </Card>
  );
}

export default ItemCard;