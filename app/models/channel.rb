class Channel < ApplicationRecord
  belongs_to :server
  has_many :messages, dependent: :destroy

  validates :name, presence: true, allow_blank: false, length: {maximum: 20, minimum: 2}
end
