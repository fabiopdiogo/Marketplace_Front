import React from 'react';
import { createContext } from 'react';
import { Cart } from '../../types/Cart';
import { Product } from '../../types/Product';

export type CartContextType = {
  state: any;
  dispatch: React.Dispatch<any>;
  addToCart: (id_user:string,id_product: string, quantity: number) => void;
  getCartProducts: (id_user: string | undefined) => Promise<any>;
  getSingleProd: (_id: string | undefined) => Promise<Product>;
  deleteFromCart: (id_user:string,id_product: string) => void;
  updateCart: (id_user:string,id_product: string, quantity: number) => void;
  finishPurchase: (_id: string | undefined) => void;
}

export const CartContext = createContext<CartContextType>(null!);