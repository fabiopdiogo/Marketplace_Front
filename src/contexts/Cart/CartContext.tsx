import React from 'react';
import { createContext } from 'react';

export type CartContextType = {
  state: any;
  dispatch: React.Dispatch<any>
}

export const CartContext = createContext<CartContextType>(null!);