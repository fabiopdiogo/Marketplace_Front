import React, { useContext, useEffect, useState } from 'react';
import styled from 'styled-components';
import { Product } from '../../types/Product';
import { CartContext } from '../../contexts/Cart/CartContext';

interface Props {
  product: Product;
}

function ProdCart({ product }: Props) {
  const { _id, name, price, image_path, quantity } = product;

  const {
    state: { cart },
    dispatch,
  } = useContext(CartContext);

  const RemoveProd = (id: string) => {
    dispatch({ type: 'REMOVE_FROM_CART', payload: id });
  };

  const handleQuantity = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const intValue = parseInt(event.target.value, 10);
    dispatch({ type: 'UPDATE_CART_QTY', payload: { _id: _id, quantity: intValue } });
  };

  useEffect(() => {
    // console.log(cart)
  }, [cart]);

  return (
    <CartItemContainer>      
      <ProductImage src={image_path} alt={name} />
      <ProductDetails>
        <ProductName>{name}</ProductName>
        <ProductPrice>${price * quantity}</ProductPrice>
      </ProductDetails>
      <ProductQuantity defaultValue={quantity} onChange={handleQuantity}>
        {[1, 2, 3, 4, 5].map((value) => (
          <option key={value} value={value}>
            {value}
          </option>
        ))}
      </ProductQuantity>
      <Remove src="bin.png" alt="Remove" onClick={() => RemoveProd(_id)} />
    </CartItemContainer>
  );
}
const CartItemContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  margin-bottom: 10px;
  border-bottom: 1px solid #ccc;
  padding-bottom: 10px;

  @media (max-width: 350px) {
  }
`;

const ProductImage = styled.img`
  width: 80px;
  height: 80px;
  object-fit: cover;
  margin-right: 20px;

  @media (max-width: 350px) {
    margin-right: 0;
    margin-bottom: 10px;
  }
`;

const ProductDetails = styled.div`
  display: flex;
  flex-direction: column;

  @media (max-width: 350px) {
    align-items: center;
  }
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
  padding: 10px;
  border-color: grey;
  margin-bottom: 5px;
`;

const Remove = styled.img`
  width: 30px;
  height: 30px;
  cursor: pointer;

  @media (max-width: 350px) {
    margin-top: 10px;
  }
`;

export default ProdCart;
