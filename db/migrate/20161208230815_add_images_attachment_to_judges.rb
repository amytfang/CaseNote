class AddImagesAttachmentToJudges < ActiveRecord::Migration
  def change
    change_table :judges do |t|
      t.attachment :image
    end
  end
end
