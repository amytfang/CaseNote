class AddIndices < ActiveRecord::Migration
  def change
    add_index :opinions, :judge_id
    add_index :opinions, :court_id
    add_index :opinions, :case
  end
end
