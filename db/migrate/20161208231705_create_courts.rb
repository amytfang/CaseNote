class CreateCourts < ActiveRecord::Migration
  def change
    create_table :courts do |t|
      t.string :name, null: false
      t.string :citation, null: false

      t.timestamps null: false
    end
  end
end
