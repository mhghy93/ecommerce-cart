import cartActionTypes from './cart.types';

const INITIAL_STATE = {
  items: [],
  loading: true,
};

const cartReducer = (state = INITIAL_STATE, action) => {
  const { type, payload } = action;

  switch (type) {
    case cartActionTypes.ADD_TO_CART:
      return {
        ...state,
        items: [...state.items, payload],
        loading: false,
      };
    case cartActionTypes.REMOVE_FROM_CART:
      return {
        ...state,
        items: state.items.filter((item) => item.id !== payload),
        loading: false,
      };
    default:
      return state;
  }
};

export default cartReducer;
