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

class Opinion < ActiveRecord::Base
  validates :case, :citation, :judge, :court, :date, :body, :transcriber_id, presence: true

  belongs_to :judge
  belongs_to :court
  belongs_to :transcriber,
    class_name: 'User',
    primary_key: :id,
    foreign_key: :transcriber_id

  has_many :annotations
  has_many :comments

  has_attached_file :image, styles: { large: "600x600>", thumb: "100x100>" }, default_url: "https://s3.us-east-2.amazonaws.com/casenote-assets/default.jpg"
  validates_attachment_content_type :image, content_type: /\Aimage\/.*\z/

  def self.search(term)
    Opinion.select(:id, :case, :citation, "judges.name").joins(:judge).where("opinions.case LIKE ? OR judges.name LIKE ? OR opinions.citation LIKE ?", "#{term}%", "#{term}%", "#{term}%")
  end

  def citation_format
    self.case + ", " + self.citation + " (#{self.court.citation} #{self.date.year})"
  end

  def use_image
    default_url = "https://s3.us-east-2.amazonaws.com/casenote-assets/default.jpg"
    if self.image.url == default_url
      judge.image.url == default_url ? self.image : judge.image
    else
      self.image
    end
  end

end
