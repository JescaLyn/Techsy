import { CartConstants } from '../actions/cart_actions';
import { merge } from 'lodash';

const CartReducer = (state = {}, action) => {
  let newState = merge({}, state);

  switch (action.type) {
    case CartConstants.RECEIVE_CART_ITEM:
      newState = merge({}, state, action.cartItem);
      return newState;
    case CartConstants.REMOVE_CART_ITEM:
      delete newState[action.listingId];
      return newState;
    case CartConstants.RECEIVE_USER_CART:
      return action.cart;
    case CartConstants.CLEAR_CART:
      return {};
    default:
      return state;
  }
};

export default CartReducer;
