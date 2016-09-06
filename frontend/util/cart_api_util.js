export const updateCartItem = (cartItem, success, error) => {
  $.ajax({
    method: "patch",
    url: "/api/cart_items/",
    data: cartItem,
    success,
    error
  });
};

export const updateCart = (cart, success, error) => {
  $.ajax({
    method: "patch",
    url: "/api/cart_items/cart",
    data: cart,
    success,
    error
  });
};

export const destroyCartItem = (cartItem, success, error) => {
  $.ajax({
    method: "delete",
    url: "/api/cart_items/",
    data: cartItem,
    success,
    error
  });
};
