class Server < ApplicationRecord
  belongs_to :user
  has_many :channels, dependent: :destroy
  has_many :user_servers
  has_many :members, through: :user_servers, source: :user

  validates :name, presence: true, allow_blank: false, length: {maximum: 20, minimum: 2}
  validates :bio, length: {maximum: 100, minimum: 0}
  validates :icon_url, length: {maximum: 1000, minimum: 0}, allow_blank: true
  validates :banner_url, length: {maximum: 1000, minimum: 0}, allow_blank: true
end
