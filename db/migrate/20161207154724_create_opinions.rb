class CreateOpinions < ActiveRecord::Migration
  def change
    create_table :opinions do |t|
      t.string :case, null: false
      t.string :citation, null: false
      t.string :judge, null: false
      t.string :court, null: false
      t.date :date, null: false
      t.text :body, null: false
      t.integer :transcriber_id, null: false
      t.string :img_url

      t.timestamps null: false
    end

    add_index :opinions, :citation, unique: true
    add_index :opinions, :transcriber_id
  end
end
