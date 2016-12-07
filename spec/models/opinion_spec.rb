# == Schema Information
#
# Table name: opinions
#
#  id             :integer          not null, primary key
#  case           :string           not null
#  citation       :string           not null
#  judge          :string           not null
#  court          :string           not null
#  date           :date             not null
#  body           :text             not null
#  transcriber_id :integer          not null
#  img_url        :string
#  created_at     :datetime         not null
#  updated_at     :datetime         not null
#

require 'rails_helper'

RSpec.describe Opinion, type: :model do
  pending "add some examples to (or delete) #{__FILE__}"
end
