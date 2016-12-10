class CreateAnnotations < ActiveRecord::Migration
  def change
    create_table :annotations do |t|
      t.integer :start_idx, null: false
      t.integer :length, null: false
      t.text :body, null: false
      t.integer :opinion_id, null: false
      t.integer :user_id, null: false

      t.timestamps null: false
    end

    add_index :annotations, :opinion_id
    add_index :annotations, :user_id
  end
end
