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
#

class Listing < ActiveRecord::Base
  validates :title, :price, :quantity, :description, :user_id, presence: true
  validates :user_id, uniqueness: true

  belongs_to :user
end
