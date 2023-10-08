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
  


  const addToCart = async (id_user: string, id_product: string, quantity: number) => {
    try {
      await axios.post(`${baseURL}/carrinho`, { id_user, id_product, quantity });
      dispatch({ type: 'ADD_TO_CART', payload: { id_product, quantity } });
    } catch (error) {
      console.error('Erro ao adicionar produto ao carrinho:', error);
    }
  };
  const deleteFromCart = async (id_user: string, id_product: string) => {
    try {
      await axios.delete(`${baseURL}/carrinho/${id_user}/${id_product}`);
      //dispatch({ type: 'ADD_TO_CART', payload: { id_product, quantity } });
    } catch (error) {
      console.error('Erro ao adicionar produto ao carrinho:', error);
    }
  };
  
  const updateCart = async (id_user: string, id_product: string, quantity: number) => {
    try {
      await axios.put(`${baseURL}/atualizarcarrinho/${id_user}/${id_product}`, {quantity});
      //dispatch({ type: 'ADD_TO_CART', payload: { id_product, quantity } });
    } catch (error) {
      console.error('Erro ao atualizar produto ao carrinho:', error);
    }
  };

  const getCartProducts = async (id_user: string | undefined) => {
    try {
      const response = await axios.get(`${baseURL}/carrinho/${id_user}`);
      setCart(response.data)
      return response.data;
    } catch (error) {
      console.error('Erro ao obter os produtos do carrinho:', error);
      return [];
    }
  };

  const getSingleProd = async (_id: string | undefined) => {
    try {
      const response = await axios.get(`${baseURL}/item/${_id}`);
      return response.data;
    } catch (error) {
      console.error('Erro ao obter o produto do estoque:', error);
      return null;
    }
  };
  useEffect(() => {
    dispatch({ type: 'POPULATE', payload: productsAux });
  }, [productsAux]);
  return (
    <CartContext.Provider value={{ 
      state, dispatch, addToCart, getCartProducts, getSingleProd, deleteFromCart, updateCart }}>
      {children}
    </CartContext.Provider>
  );
};
