import { ShopConstants } from '../actions/shop_actions';
import { merge } from 'lodash';

const defaultState = Object.freeze({
  currentShop: {},
  errors: []
});

const ShopReducer = (state = defaultState, action) => {
  let newState = merge({}, defaultState);

  switch (action.type) {
    case ShopConstants.RECEIVE_SHOP:
      newState.currentShop = action.shop;
      return newState;
    case ShopConstants.RECEIVE_SHOP_ERRORS:
      newState.errors = action.errors;
      return newState;
    case ShopConstants.CLEAR_SHOP_ERRORS:
      newState = merge({}, state);
      newState.errors = [];
      return newState;
    default:
      return state;
  }
};

export default ShopReducer;
