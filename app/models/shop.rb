# == Schema Information
#
# Table name: shops
#
#  id          :integer          not null, primary key
#  name        :string           not null
#  description :string
#  country     :string           not null
#  currency    :string           default("USD")
#  kind        :string           not null
#  image_url   :string
#  user_id     :integer          not null
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#

CURRENCIES = [
  "USD",
  "EUR",
  "GBP",
  "JPY",
  "AUD",
  "CAD"
]

COUNTRIES = [
  "Australia",
  "Canada",
  "France",
  "Germany",
  "Greece",
  "Ireland",
  "Italy",
  "Japan",
  "New Zealand",
  "Portugal",
  "Russia",
  "Spain",
  "The Netherlands",
  "United Kingdom",
  "United States"
]

KINDS = [
  "full time",
  "part full time",
  "part time",
  "other"
]

class Shop < ActiveRecord::Base
  validates :name, :country, :currency, :kind, :user_id, presence: true
  validates :user_id, uniqueness: true
  validates :currency, inclusion: { in: CURRENCIES }
  validates :country, inclusion: { in: COUNTRIES }
  validates :kind, inclusion: { in: KINDS }

  belongs_to :user
  has_many :listings
end
