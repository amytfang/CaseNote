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

require 'rails_helper'

RSpec.describe Annotation, type: :model do
  pending "add some examples to (or delete) #{__FILE__}"
end
