import styled  from "styled-components";

const Card = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%; /* Largura fixa da div pai */
  height: auto; /* Altura fixa da div pai */
  padding: 15px;
  margin-bottom: 20px;
  cursor: pointer;  
  gap: 10px;
  :hover{
    box-shadow:
    0px 0px 4px rgba(0, 0, 0, 0.2), /* Sombra fraca em todas as direções */
    8px 0px 8px -4px rgba(0, 0, 0, 0.2); /* Sombra mais forte na direita */
  }
`

const Image = styled.img`
  width: 100%; 
  height: auto;
`
const Preco = styled.h2`
`
const P = styled.p`
`
interface Props{
  src: string;
}

function ItemCard ({src}:Props){
  return(
    <Card>
      <Image src={src}/>
      <Preco>R$ 200</Preco>
      <P>A vista no pix</P>
    </Card>
  )
}

export default ItemCard;