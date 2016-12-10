class Annotation < ActiveRecord::Base
  validates :user, :opinion, :start_idx, :length, :body, presence: true

  belongs_to :user
  belongs_to :opinion
end
