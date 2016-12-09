class EditJudgesTable < ActiveRecord::Migration
  def change
    add_column :judges, :name, :string, null: false
  end
end
