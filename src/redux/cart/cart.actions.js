import axios from 'axios';
import cartActionTypes from './cart.types';
import { BASE_API_URL } from '../utils/api';

export const addToCart = (id) => async (dispatch) => {
  const { data } = await axios.get(`${BASE_API_URL}/${id}`);

  dispatch({
    type: cartActionTypes.ADD_TO_CART,
    payload: data,
  });
};

export const removeFromCart = (id) => async (dispatch) => {
  dispatch({
    type: cartActionTypes.REMOVE_FROM_CART,
    payload: id,
  });
};
