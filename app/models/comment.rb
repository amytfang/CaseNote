# == Schema Information
#
# Table name: comments
#
#  id         :integer          not null, primary key
#  opinion_id :integer          not null
#  user_id    :integer          not null
#  body       :text             not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class Comment < ActiveRecord::Base
  include Votable

  validates :user, :opinion, :body, presence: true
  belongs_to :user
  belongs_to :opinion

end
