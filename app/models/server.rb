class Server < ApplicationRecord
  belongs_to :user
  has_many :channels, dependent: :destroy
  has_many :user_servers, dependent: :destroy
  has_many :members, through: :user_servers, source: :user
  has_many :messages, through: :channels, source: :messages, dependent: :destroy

  validates :name, presence: true, allow_blank: false, length: {maximum: 20, minimum: 2}
  validates :description, length: {maximum: 100}, allow_blank: true
  validates :icon_url, length: {maximum: 1000}, allow_blank: true
  validates :banner_url, length: {maximum: 1000}, allow_blank: true
end
