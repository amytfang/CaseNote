class CreateJudges < ActiveRecord::Migration
  def change
    create_table :judges do |t|

      t.timestamps null: false
    end
  end
end
