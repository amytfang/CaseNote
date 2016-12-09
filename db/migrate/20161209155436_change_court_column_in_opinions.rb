class ChangeCourtColumnInOpinions < ActiveRecord::Migration
  def change
    add_column :opinions, :court_id, :integer, null: false
    remove_column :opinions, :court, :string
  end
end
