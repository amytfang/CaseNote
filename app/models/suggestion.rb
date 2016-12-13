# == Schema Information
#
# Table name: suggestions
#
#  id              :integer          not null, primary key
#  user_id         :integer          not null
#  annotation_id   :integer          not null
#  suggestion_type :string           not null
#  body            :text
#  created_at      :datetime         not null
#  updated_at      :datetime         not null
#

class Suggestion < ActiveRecord::Base
  validates :user, :annotation, :suggestion_type, presence: true
  validates :suggestion_type, inclusion: {
    in: %w(restate missing stretch other),
    message: "Invalid suggestion type"
  }
  validates_presence_of :body, :if => lambda { |o| o.suggestion_type != "other" }

  belongs_to :user
  belongs_to :annotation
end
