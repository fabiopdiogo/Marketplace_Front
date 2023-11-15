export const cartReducer = (state: any, action: any) => {
  switch (action.type) {
    case 'POPULATE_PRODUCTS':
      return { ...state, products: action.payload };
    case 'ADD_TO_CART':          
      return { ...state, cart: [...state.cart, { ...action.payload, quantity: 1 }] };      
    case 'REMOVE_FROM_CART': 
      return {
        ...state,
        cart: state.cart.filter((product: { id_product: string }) => product.id_product !== action.payload),
      };
    case 'UPDATE_CART_QTY':
      return {
        ...state,
        cart: state.cart.map((item: any) => {
          if (item.id_product === action.payload.id_product) {
            return { ...item, quantity: action.payload.quantity };
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
