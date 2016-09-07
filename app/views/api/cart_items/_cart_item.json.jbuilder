json.set! cart_item.listing_id do
  json.listing_id cart_item.listing_id
  json.listing_title cart_item.listing.title
  json.listing_subtitle cart_item.listing.subtitle
  json.listing_price cart_item.listing.price_reset
  json.listing_image_url cart_item.listing.image_url
  json.listing_quantity cart_item.listing.quantity
  json.shop_id cart_item.shop.id
  json.shop_name cart_item.shop.name
  json.shop_logo cart_item.shop.image_url
  json.quantity cart_item.quantity
end
