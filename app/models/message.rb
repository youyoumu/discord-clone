class Message < ApplicationRecord
  belongs_to :user
  belongs_to :channel

  validates :content, presence: true, allow_blank: false
end
