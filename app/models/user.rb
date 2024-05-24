class User < ApplicationRecord
  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable, :trackable and :omniauthable
  devise :database_authenticatable, :registerable,
    :recoverable, :rememberable, :validatable

  has_many :access_grants,
    class_name: "Doorkeeper::AccessGrant",
    foreign_key: :resource_owner_id,
    dependent: :delete_all # or :destroy if you need callbacks

  has_many :access_tokens,
    class_name: "Doorkeeper::AccessToken",
    foreign_key: :resource_owner_id,
    dependent: :delete_all # or :destroy if you need callbacks

  has_many :servers
  has_many :user_servers
  has_many :joined_servers, through: :user_servers, source: :server
  has_many :messages

  validates :username, presence: true
  validates :display_name, length: {maximum: 20}, allow_nil: true
  validates :avatar_url, length: {maximum: 1000}, allow_nil: true
  validates :bio, length: {maximum: 1000}, allow_nil: true
end
