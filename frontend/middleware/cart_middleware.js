import { CartConstants, receiveUserCart, receiveCartItem }
  from '../actions/cart_actions';
import * as API from "../util/cart_api_util";
import { hashHistory } from 'react-router';

const CartMiddleware = ({ getState, dispatch }) => next => action => {
  let success;
  const error = () => console.log("error");

  switch (action.type) {
    case CartConstants.MERGE_EXISTING_CART:
      success = userCart => dispatch(receiveUserCart(userCart));
      const existingCart = getState().cart;
      const cartObj = { cart: existingCart };

      API.updateCart(cartObj, success, error);

      return next(action);
    case CartConstants.UPDATE_CART_ITEM:
      success = item => {
        dispatch(receiveCartItem(item));
        hashHistory.push(`/cart`);
      };

      if (getState().session.currentUser) {
        API.updateCartItem(action.cartItem, success, error);
        return next(action);
      } else {
        let cartItem = {};
        cartItem[action.cartItem.listing_id] = action.cartItem;
        success(cartItem);
        break;
      }
    case CartConstants.REMOVE_CART_ITEM:
      if (getState().session.currentUser) {
        success = () => next(action);
        const cartItem = { listing_id: action.listingId };
        API.destroyCartItem(cartItem, success, error);
        break;
      } else {
        return next(action);
      }
    default:
      next(action);
  }
};

export default CartMiddleware;
