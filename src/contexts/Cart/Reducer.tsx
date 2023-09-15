export const cartReducer =  (state: any, action: any) =>  {
  switch (action.type){
    case 'POPULATE':
      return { ...state, products: action.payload };
    case 'ADD_TO_CART':
      return { ...state, cart: [...state.cart, { ...action.payload, qty: 1}] };
      case 'REMOVE_FROM_CART':
        return {
          ...state,
          cart: state.cart.filter((c: { _id: any }) => c._id !== action.payload)
        };

    default:
      return state;
  }
}