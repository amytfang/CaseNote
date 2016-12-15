class CreateVotes < ActiveRecord::Migration
  def change
    create_table :votes do |t|
      t.integer :user_id, null: false
      t.integer :votable_id, null: false
      t.string :votable_type, null: false
      t.integer :status, null: false

      t.timestamps null: false
    end

    add_index :votes, :user_id
    add_index :votes, :votable_id
  end
end
