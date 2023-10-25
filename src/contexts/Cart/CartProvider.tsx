import React, { createContext, useContext, useEffect, useReducer, useState } from 'react';

import { Product } from '../../types/Product';
import { AuthContext } from '../Auth/AuthContext';
import { cartReducer } from './Reducer';
import { CartContext } from './CartContext';
import axios from 'axios';
import { baseURL } from '../../utils/constant';
import { Cart } from '../../types/Cart';


export const CartProvider = ({ children }: { children: JSX.Element }) => {
  const auth = useContext(AuthContext);
  const [productsAux, setProductsAux] = useState<Product[]>([]);  
  const [cart, setCart] = useState<Cart | null>(null);
  const [state, dispatch] = useReducer(cartReducer, {
    products: productsAux,
    cart: [],
  }); 
    
  useEffect(() => {
    const listProducts = async () => {
      const response = await auth.getProducts();
      setProductsAux(response);
    };
    listProducts();
  }, [auth]);  

  
  const finishPurchase = async (id_user: string | undefined) => {
    try {
      const response = await axios.post(`${baseURL}/compra/${id_user}`);
      return response.data;
    } catch (error) {
      console.error('Erro ao finalizar compra:', error);
      return [];
    }
  };

  useEffect(() => {
    dispatch({ type: 'POPULATE_PRODUCTS', payload: productsAux });
  }, [productsAux]);
  return (
    <CartContext.Provider value={{ 
      state, dispatch, finishPurchase }}>
      {children}
    </CartContext.Provider>
  );
};