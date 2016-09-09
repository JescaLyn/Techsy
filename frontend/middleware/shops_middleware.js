import { ShopConstants, receiveShops, receiveShop, receiveShopErrors }
  from '../actions/shop_actions';
import * as API from "../util/shop_api_util";
import { hashHistory } from 'react-router';

const ShopsMiddleware = ({ getState, dispatch }) => next => action => {
  let success = shop => dispatch(receiveShop(shop));
  let createShopSuccess = shop => {
    dispatch(receiveShop(shop));
    hashHistory.push(`/shops/${shop.id}`);
  };

  const error = xhr => {
    const errors = xhr.responseJSON;
    dispatch(receiveShopErrors(errors));
  };

  switch (action.type) {
    case ShopConstants.REQUEST_SHOP:
      API.fetchShop(action.shopId, success, error);
      return next(action);
    case ShopConstants.UPDATE_SHOP:
      API.updateShop(action.shop, success, error);
      return next(action);
    case ShopConstants.CREATE_SHOP:
      API.createShop(action.shop, createShopSuccess, error);
      return next(action);
    default:
      next(action);
  }
};

export default ShopsMiddleware;
