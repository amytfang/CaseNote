class AddAttachmentImageToOpinions < ActiveRecord::Migration
  def self.up
    change_table :opinions do |t|
      t.attachment :image
    end
  end

  def self.down
    remove_attachment :opinions, :image
  end
end
