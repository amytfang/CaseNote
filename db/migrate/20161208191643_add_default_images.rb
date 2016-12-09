class AddDefaultImages < ActiveRecord::Migration
  def change
    change_column :opinions, :img_url, :string, :default => "assets/images/scotus.jpg"
  end
end
