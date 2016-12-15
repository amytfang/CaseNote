# == Schema Information
#
# Table name: votes
#
#  id           :integer          not null, primary key
#  user_id      :integer          not null
#  votable_id   :integer          not null
#  votable_type :string           not null
#  status       :integer          not null
#  created_at   :datetime         not null
#  updated_at   :datetime         not null
#

class Vote < ActiveRecord::Base
  validates :user, :votable, :status, presence: true
  validates :user_id, uniqueness: { scope: [:votable_type, :votable_id] }

  belongs_to :votable, polymorphic: true
  belongs_to :user, inverse_of: :votes

  def self.find_by_votable(votable, user_id)
    Vote.find_by(
      votable_id: votable.id,
      votable_type: votable.class.to_s,
      user_id: user_id
    )
  end
end
