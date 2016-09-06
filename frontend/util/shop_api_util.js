export const fetchShop = (shopId, success, error) => {
  $.ajax({
    method: "get",
    url: `/api/shops/${shopId}`,
    success,
    error
  });
};

export const createShop = (shop, success, error) => {
  $.ajax({
    method: "post",
    url: "/api/shops",
    data: shop,
    success,
    error
  });
};

export const updateShop = (shop, success, error) => {
  $.ajax({
    method: "patch",
    url: `/api/shop/${shop.id}`,
    data: shop,
    success,
    error
  });
};
