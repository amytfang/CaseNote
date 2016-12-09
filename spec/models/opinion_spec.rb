# == Schema Information
#
# Table name: opinions
#
#  id                 :integer          not null, primary key
#  case               :string           not null
#  citation           :string           not null
#  date               :date             not null
#  body               :text             not null
#  transcriber_id     :integer          not null
#  created_at         :datetime         not null
#  updated_at         :datetime         not null
#  judge_id           :integer          not null
#  court_id           :integer          not null
#  image_file_name    :string
#  image_content_type :string
#  image_file_size    :integer
#  image_updated_at   :datetime
#

require 'rails_helper'

RSpec.describe Opinion, type: :model do
  pending "add some examples to (or delete) #{__FILE__}"
end
