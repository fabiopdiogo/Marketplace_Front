export const cartReducer = (state: any, action: any) => {
  switch (action.type) {
    case 'POPULATE':
      return { ...state, products: action.payload };
    case 'ADD_TO_CART':
      return { ...state, cart: [...state.cart, { ...action.payload, qty: 1 }] };
    case 'REMOVE_FROM_CART':
      return {
        ...state,
        cart: state.cart.filter((product: { _id: string; }) => product._id !== action.payload)
      };
    case 'UPDATE_PRODUCT_QUANTITY':
      const { productId, newQuantity } = action.payload;

      // Atualiza a quantidade do produto no carrinho
      const updatedCart = state.cart.map((product: { _id: string; }) =>
        product._id === productId ? { ...product, quantity: newQuantity } : product
      );

      return { ...state, cart: updatedCart };
    default:
      return state;
  }
};
