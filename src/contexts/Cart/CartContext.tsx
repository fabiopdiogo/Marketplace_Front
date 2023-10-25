import React from 'react';
import { createContext } from 'react';
import { Product } from '../../types/Product';

export type CartContextType = {
  state: any;
  dispatch: React.Dispatch<any>;
  finishPurchase: (_id: string | undefined) => void;
}

export const CartContext = createContext<CartContextType>(null!);