class Comment < ActiveRecord::Base
  validates :user, :opinion, :body, presence: true
  belongs_to :user
  belongs_to :opinion
end
