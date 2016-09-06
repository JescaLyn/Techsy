json.extract! user, :id, :username
json.cart do
  user.cart_items.each do |cart_item|
    json.partial! "api/cart_items/cart_item.json", cart_item: cart_item
  end
end
