export const ShopConstants = {
  REQUEST_SHOP: "REQUEST_SHOP",
  RECEIVE_SHOP: "RECEIVE_SHOP",
  UPDATE_SHOP: "UPDATE_SHOP",
  DELETE_SHOP: "DELETE_SHOP",
  CREATE_SHOP: "CREATE_SHOP",
  RECEIVE_SHOP_ERRORS: "RECEIVE_SHOP_ERRORS",
  CLEAR_SHOP_ERRORS: "CLEAR_SHOP_ERRORS"
};

export const requestShop = shopId => ({
  type: ShopConstants.REQUEST_SHOP,
  shopId
});

export const receiveShop = shop => ({
  type: ShopConstants.RECEIVE_SHOP,
  shop
});

export const updateShop = shop => ({
  type: ShopConstants.UPDATE_SHOP,
  shop
});

export const createShop = shop => ({
  type: ShopConstants.CREATE_SHOP,
  shop
});

export const receiveShopErrors = errors => ({
  type: ShopConstants.RECEIVE_SHOP_ERRORS,
  errors
});

export const clearShopErrors = () => ({
  type: ShopConstants.CLEAR_SHOP_ERRORS
});
