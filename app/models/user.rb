# == Schema Information
#
# Table name: users
#
#  id              :integer          not null, primary key
#  username        :string           not null
#  password_digest :string           not null
#  session_token   :string           not null
#  created_at      :datetime         not null
#  updated_at      :datetime         not null
#  fname           :string
#  lname           :string
#  email           :string           not null
#

class User < ActiveRecord::Base
  attr_reader :password

  validates :username, :password_digest, :session_token, :email, presence: true
  validates :username, :session_token, :email, uniqueness: true
  validates :password, length: { minimum: 6, allow_nil: true }

  after_initialize :ensure_session_token

  has_many :cart_items, dependent: :destroy
  has_many :cart_listings,
    through: :cart_items,
    source: :listing
  has_one :shop
  has_many :listings, through: :shop

  def self.find_by_credentials(username, password)
    user = User.find_by(username: username)
    return nil unless user && user.is_password?(password)
    user
  end

  def password=(password)
    @password = password
    self.password_digest = BCrypt::Password.create(password)
  end

  def is_password?(password)
    pw_digest = BCrypt::Password.new(self.password_digest)
    pw_digest.is_password?(password)
  end

  def reset_session_token!
    self.session_token = generate_session_token
    self.save
  end

  def shop_id
    self.shop ? self.shop.id : nil
  end

  private

  def generate_session_token
    SecureRandom.urlsafe_base64(32)
  end

  def ensure_session_token
    self.session_token ||= generate_session_token
  end
end
