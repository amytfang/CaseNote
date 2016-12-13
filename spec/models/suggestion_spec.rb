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

require 'rails_helper'

RSpec.describe Suggestion, type: :model do
  pending "add some examples to (or delete) #{__FILE__}"
end
