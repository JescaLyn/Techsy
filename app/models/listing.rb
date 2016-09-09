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
  has_many :reviews, dependent: :destroy

  SMALL_WORDS = ["the","of","and","a","to","in","is","you","that","it",
    "he","was","for","on","are","as","with","his","they","I","at","be",
    "this","have","from","or","one","had","by","word","but","not","what",
    "all","were","we","when","your","can","said","there","use","an","each",
    "which","she","do","how","their","if","will","up","other","about","out",
    "many","then","them","these","so","some","her","would","make","like",
    "him","into","time","has","look","two","more","write","go","see","number",
    "no","way","could","people","my","than","first","water","been","call",
    "who","oil","its","now","find","long","down","day","did","get","come",
    "made","may","part"]

  def self.by_search_filter(search_filter)
    search_terms = search_filter.split(" ")
    listings = Listing.all

    search_terms.each do |term|
      listings = listings.where("title ILIKE :sf OR subtitle ILIKE :sf
        OR description ILIKE :sf", sf: "%#{term}%")
    end

    listings
  end

  def self.search_terms
    words = Listing.all.map do |listing|
      (listing.title << " " << listing.subtitle << " " << listing.description)
        .downcase
    end.map do |content|
      content.split(/\W+/)
    end.flatten.reject { |el| el.length < 3 || SMALL_WORDS.include?(el) }

    wordsHash = Hash.new(0)
    words.each { |word| wordsHash[word] += 1 }

    search_terms = wordsHash.sort_by { |_, val| val }.to_h.keys
  end

  def sibling_listings
    Listing
      .where("shop_id = ?", self.shop_id)
      .where("id != ?", self.id)
      .limit(4)
  end

  def price_reset
    if self.price.to_s.split(".").last.length < 2
      return self.price.to_s << "0"
    end

    self.price
  end
end
