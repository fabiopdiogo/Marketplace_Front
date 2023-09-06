import { Product } from "../../types/Product";

// Reducer.ts
const cartReducer = (state: Product[], action: { type: string, payload: Product }): Product[] => {
  switch (action.type) {
    case 'ADD_TO_CART':
      return [...state, action.payload]; // Adicionar o produto ao estado do carrinho
    default:
      return state; // Retornar o estado sem modificações para outras ações
  }
};

export default cartReducer;
