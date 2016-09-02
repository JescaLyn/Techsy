# == Schema Information
#
# Table name: listings
#
#  id          :integer          not null, primary key
#  title       :string           not null
#  price       :float            not null
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
end
