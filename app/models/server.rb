class Server < ApplicationRecord
  belongs_to :user
  has_many :channels, dependent: :destroy
  has_many :user_servers
  has_many :members, through: :user_servers, source: :user
end
