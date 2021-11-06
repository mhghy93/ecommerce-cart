import productActionTypes from './product.types';

const INITIAL_STATE = {
  products: [],
  loading: true,
  error: {},
};

const productReducer = (state = INITIAL_STATE, action) => {
  const { type, payload } = action;

  switch (type) {
    case productActionTypes.SHOW_PRODUCTS:
      return {
        ...state,
        products: payload,
        loading: false,
      };
    case productActionTypes.PRODUCT_ERROR:
      return {
        ...state,
        error: payload,
        loading: false,
      };
    default:
      return state;
  }
};

export default productReducer;
