# == Schema Information
#
# Table name: judges
#
#  id                 :integer          not null, primary key
#  created_at         :datetime         not null
#  updated_at         :datetime         not null
#  name               :string           not null
#  image_file_name    :string
#  image_content_type :string
#  image_file_size    :integer
#  image_updated_at   :datetime
#

class Judge < ActiveRecord::Base
  has_attached_file :image, styles: { large: "600x600>", thumb: "100x100>" }, default_url: "https://s3.us-east-2.amazonaws.com/casenote-assets/default.jpg"
  validates_attachment_content_type :image, content_type: /\Aimage\/.*\z/



end
