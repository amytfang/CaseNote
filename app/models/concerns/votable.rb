module Votable
  extend ActiveSupport::Concern

  included do
    has_many :votes, as: :votable,
      class_name: "Vote",
      dependent: :destroy
  end

  def num_votes
    self.votes.sum(:status)
  end

  def user_vote(user_id)
    vote = Vote.find_by_votable(self, user_id)
    vote ? vote.status : 0
  end
end
