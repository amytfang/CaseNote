# == Schema Information
#
# Table name: annotations
#
#  id         :integer          not null, primary key
#  start_idx  :integer          not null
#  length     :integer          not null
#  body       :text             not null
#  opinion_id :integer          not null
#  user_id    :integer          not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class Annotation < ActiveRecord::Base
  include Votable

  validates :user, :opinion, :start_idx, :length, :body, presence: true

  belongs_to :user
  belongs_to :opinion
  has_many :suggestions
end
