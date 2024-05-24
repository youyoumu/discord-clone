class Message < ApplicationRecord
  belongs_to :user
  belongs_to :channel

  validates :content, presence: true, allow_blank: false, length: {maximum: 2000}
end
