class Channel < ApplicationRecord
  belongs_to :server
  has_many :messages

  validates :name, presence: true, allow_blank: false
end
