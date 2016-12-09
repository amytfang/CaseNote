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

class Court < ActiveRecord::Base
end
