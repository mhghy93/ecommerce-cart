import axios from 'axios';
import productActionTypes from './product.types';
import { BASE_API_URL } from '../utils/api';

export const getAllProducts = () => async (dispatch) => {
  await axios
    .get(`${BASE_API_URL}`)
    .then((res) => {
      dispatch({
        type: productActionTypes.SHOW_PRODUCTS,
        payload: res.data,
      });
    })
    .catch((err) =>
      dispatch({
        type: productActionTypes.PRODUCT_ERROR,
        payload: err,
      })
    );
};
