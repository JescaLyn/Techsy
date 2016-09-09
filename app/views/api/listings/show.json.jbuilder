json.partial! "/api/listings/listing", listing: @listing
json.shop_image_url @listing.shop.image_url
json.shop_id @listing.shop_id
json.user_id @listing.user.id
json.siblings do
  json.array! @listing.sibling_listings do |sibling|
    json.partial! "api/listings/listing", listing: sibling
  end
end
json.reviews do
  json.array! @listing.reviews do |review|
    json.rating review.rating
    json.comment review.comment
    json.username review.user.username
  end
end
