json.extract! listing, :id, :title, :subtitle, :quantity, :description, :image_url
json.price listing.price_reset
json.shop_name listing.shop.name
