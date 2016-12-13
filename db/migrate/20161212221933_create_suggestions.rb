class CreateSuggestions < ActiveRecord::Migration
  def change
    create_table :suggestions do |t|
      t.integer :user_id, null: false
      t.integer :annotation_id, null: false
      t.string :suggestion_type, null: false
      t.text :body, null: false

      t.timestamps null: false
    end

    add_index :suggestions, :user_id
    add_index :suggestions, :annotation_id
  end
end
