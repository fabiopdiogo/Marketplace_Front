export const cartReducer = (state: any, action: any) => {
  switch (action.type) {
    case 'POPULATE':
      return { ...state, products: action.payload };
    case 'ADD_TO_CART':
      return { ...state, cart: [...state.cart, { ...action.payload, qty: 1 }] };
    case 'REMOVE_FROM_CART':
      return {
        ...state,
        cart: state.cart.filter((product: { _id: string }) => product._id !== action.payload),
      };
    case 'UPDATE_CART_QTY':
      return {
        ...state,
        cart: state.cart.map((item: any) => {
          if (item._id === action.payload._id) {
            return { ...item, qty: action.payload.quantity };
          }
          return item;
        }),
      };
    case 'CLEAR_CART':
      return {
        ...state,
        cart: [],
      };
    default:
      return state;
  }
};
