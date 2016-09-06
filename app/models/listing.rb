# == Schema Information
#
# Table name: listings
#
#  id          :integer          not null, primary key
#  title       :string           not null
#  price       :decimal(8, 2)    not null
#  quantity    :integer          not null
#  description :text             not null
#  image_url   :string
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#  shop_id     :integer          not null
#  subtitle    :string           not null
#

class Listing < ActiveRecord::Base
  validates :title, :subtitle, :price, :quantity, :description, :shop_id, presence: true
  validates :title, length: { maximum: 50 }
  validates :subtitle, length: { maximum: 140 }

  belongs_to :shop
  has_one :user, through: :shop
  has_many :cart_items, dependent: :destroy

  def sibling_listings
    Listing
      .where("shop_id = ?", self.shop_id)
      # .where("id != ?", self.id)
  end

  def price_reset
    if self.price.to_s.split(".").last.length < 2
      return self.price.to_s << "0"
    end

    self.price
  end
end
