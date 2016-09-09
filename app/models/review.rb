class Review < ActiveRecord::Base
  validates :user_id, :listing_id, :rating, presence: true

  belongs_to :user
  belongs_to :listing
end
