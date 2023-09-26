import React, { useContext, useEffect, useState } from 'react';
import styled  from "styled-components";
import { Product } from "../../types/Product";
import { CartContext } from "../../contexts/Cart/CartContext";

interface Props {
  product: Product;
}

function ProdCart ({ product } : Props) {

  const {_id,name, price, image_path} = product;
  const [newQuantity, setNewQuantity] = useState(1);

  const {
    state: { cart },
    dispatch
  } = useContext(CartContext);

  const RemoveProd = (id : string) => {
    dispatch({ type: 'REMOVE_FROM_CART', payload: id });
  }
  const handleQuantity = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const intValue = parseInt(event.target.value, 10);
    const productId=_id;
    setNewQuantity(intValue);    
    //console.log(newQuantity)
    dispatch({ type: 'UPDATE_PRODUCT_QUANTITY', payload: { productId, newQuantity } });
  }
  useEffect(() =>{
    console.log(cart)
  },[cart])

  return (
    <CartItemContainer>
      <Div>
        <ProductImage src={image_path} alt={name} />
        <ProductName>{name}</ProductName>
        <ProductPrice>${price}</ProductPrice>     
        <ProductQuantity onChange={handleQuantity}>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
        </ProductQuantity>
        <Remove src="bin.png" onClick={(e) => { e.preventDefault(); RemoveProd(product._id); }}></Remove>
      </Div>      
    </CartItemContainer>
  );
};

const CartItemContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 10px;
  border-bottom: 1px solid #ccc;
  padding-bottom: 10px;
`;

const Div = styled.div`
  display: flex;  
  align-items: center;
  gap:50px;
  padding: 0 20px;
`;

const Remove = styled.img`
  width: 30px;
  height: 30px;
  cursor:pointer
`

const ProductImage = styled.img`
  width: 80px;
  height: 80px;
  object-fit: cover;
  margin-right: 20px;
  padding-top: 10px;
`;


const ProductName = styled.div`
  font-size: 16px;
  font-weight: bold;
  margin-bottom: 5px;
`;

const ProductPrice = styled.div`
  font-size: 14px;
  margin-bottom: 5px;
`;

const ProductQuantity = styled.select`
  width: 100px;
  padding: 10px;
  border-color: grey;
`;

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
export default ProdCart;