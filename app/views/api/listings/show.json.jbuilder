json.partial! "/api/listings/listing", listing: @listing
json.shop_image_url @listing.shop.image_url
json.siblings @listing.sibling_listings
