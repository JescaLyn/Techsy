# == Schema Information
#
# Table name: cart_items
#
#  id         :integer          not null, primary key
#  cart_id    :integer          not null
#  listing_id :integer          not null
#  quantity   :integer          default(1), not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class CartItem < ActiveRecord::Base
  validates :user, :listing, :quantity, presence: true
  validates :user_id, uniqueness: { scope: :listing_id }

  belongs_to :user
  belongs_to :listing
  has_one :shop, through: :listing

  # def render
  #   cart_item = {};
  #   listing = self.listing
  #   shop = listing.shop
  #   {
  #     listing_id: self.listing_id,
  #     title: listing.title,
  #     subtitle: listing.subtitle,
  #     price: listing.price,
  #     image_url: listing.image_url,
  #     shop_id: listing.shop_id,
  #     shop_name: shop.name,
  #     shop_logo: shop.image_url,
  #     quantity: self.quantity
  #   }
  # end
end
