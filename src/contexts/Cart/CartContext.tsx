import React from 'react';
import { createContext } from 'react';
import { Product } from '../../types/Product';

export type CartContextType = {
  state: any;
  dispatch: React.Dispatch<any>;
}

export const CartContext = createContext<CartContextType>(null!);