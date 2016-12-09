# == Schema Information
#
# Table name: courts
#
#  id         :integer          not null, primary key
#  name       :string           not null
#  citation   :string           not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

require 'rails_helper'

RSpec.describe Court, type: :model do
  pending "add some examples to (or delete) #{__FILE__}"
end
