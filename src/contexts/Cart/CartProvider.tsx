import React, { createContext, useContext, useEffect, useReducer, useState } from 'react';


import { Product } from '../../types/Product';
import { AuthContext } from '../Auth/AuthContext';
import { cartReducer } from './Reducer';
import { CartContext } from './CartContext';

const Cart = createContext(CartContext);

export const CartProvider = ({children}: { children: JSX.Element} ) =>{

  const auth = useContext(AuthContext);
  const [productsAux, setProductsAux] = useState<Product>({"_id": "001","name": "PTeste","image_path": "teste/teste", "amount": 2})

  useEffect(() => {
    const ListProducts = async () =>{
      const response = await auth.getProducts()
      setProductsAux(response)
    }
    ListProducts()
  },[auth])
    
  const [state, dispatch] = useReducer(cartReducer, {
    products: [], // Inicializa com o valor de productsAux
    cart: []
  });
  
  useEffect(() => {
    dispatch({ type: 'POPULATE', payload: productsAux });
  }, [productsAux]);

  return <CartContext.Provider value={{state, dispatch}}>
          {children}
        </CartContext.Provider>
}