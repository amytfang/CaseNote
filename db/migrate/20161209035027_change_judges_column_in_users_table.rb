class ChangeJudgesColumnInUsersTable < ActiveRecord::Migration
  def change
    add_column :opinions, :judge_id, :integer, null: false
    remove_column :opinions, :judge, :string
    remove_column :opinions, :img_url, :string
  end
end
