export const CartConstants = {
  MERGE_EXISTING_CART: "MERGE_EXISTING_CART",
  RECEIVE_USER_CART: "RECEIVE_USER_CART",
  UPDATE_CART_ITEM: "UPDATE_CART_ITEM",
  RECEIVE_CART_ITEM: "RECEIVE_CART_ITEM",
  REMOVE_CART_ITEM: "REMOVE_CART_ITEM",
  DELETE_USER_CART: "DELETE_USER_CART",
  CLEAR_CART: "CLEAR_CART"
};

export const updateCartItem = cartItem => ({
  type: CartConstants.UPDATE_CART_ITEM,
  cartItem
});

export const receiveCartItem = cartItem => ({
  type: CartConstants.RECEIVE_CART_ITEM,
  cartItem
});

export const removeCartItem = listingId => ({
  type: CartConstants.REMOVE_CART_ITEM,
  listingId
});

export const clearCart = () => ({
  type: CartConstants.CLEAR_CART
});

export const deleteUserCart = () => ({
  type: CartConstants.DELETE_USER_CART
});

export const mergeExistingCart = () => ({
  type: CartConstants.MERGE_EXISTING_CART
});

export const receiveUserCart = cart => ({
  type: CartConstants.RECEIVE_USER_CART,
  cart
});
