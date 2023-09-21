import React from 'react';
import styled  from "styled-components";
import { Product } from "../../types/Product";
import { CartContext } from "../../contexts/Cart/CartContext";

interface Props {
  product: Product;
}

function ProdCart ({ product } : Props) {

  const { name, price, image_path, amount} = product;

  return (
    <CartItemContainer>
      <ProductImage src={image_path} alt={name} />
      <ProductInfo>
        <ProductName>{name}</ProductName>
        <ProductPrice>${price}</ProductPrice>
        <ProductQuantity>Quantity</ProductQuantity>
      </ProductInfo>
    </CartItemContainer>
  );
};

const CartItemContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 10px;
  border-bottom: 1px solid #ccc;
  padding-bottom: 10px;
`;

const ProductImage = styled.img`
  width: 80px;
  height: 80px;
  object-fit: cover;
  margin-right: 20px;
`;

const ProductInfo = styled.div`
  display: flex;
  flex-direction: column;
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

const ProductQuantity = styled.div`
  font-size: 14px;
  color: #888;
`;

export default ProdCart;