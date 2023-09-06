import React, { createContext, useContext, useEffect, useReducer, useState } from 'react';
import { cartReducer } from './Reducer';
import { Product } from '../../types/Product';
import { AuthContext } from '../Auth/AuthContext';

interface CartContextType {
  products: Product[];
  cart: any[]; // Coloque o tipo correto para o array 'cart'
  addToCart: (product: Product[]) => void;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

const CartProvider = ({ children }: { children: JSX.Element }) => {
  const [products, setProducts] = useState<Product[]>([]);
  const auth = useContext(AuthContext);
  const [cart, dispatch] = useReducer(cartReducer, []);

  useEffect(() => {
    const loadProducts = async () => {
      const response = await auth.getProducts();
      setProducts(response);
    };
    addToCart(products)
    loadProducts();
  }, [auth]);

  const addToCart = (product: Product[]) => {
    dispatch({ type: 'ADD_TO_CART', payload: product });
  };

  return (
    <CartContext.Provider value={{ products, cart, addToCart }}>
      {children}
    </CartContext.Provider>
  );
};

export default CartProvider;

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
};
