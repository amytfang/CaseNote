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

require 'rails_helper'

RSpec.describe Vote, type: :model do
  pending "add some examples to (or delete) #{__FILE__}"
end
