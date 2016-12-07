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

class Opinion < ActiveRecord::Base
  validates :case, :citation, :judge, :court, :date, :body, :transcriber_id, presence: true

  belongs_to :transcriber,
    class_name: 'User',
    primary_key: :id,
    foreign_key: :transcriber_id

end
