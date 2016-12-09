class EditDefaultImageUrl < ActiveRecord::Migration
  def change
    change_column_default :opinions, :img_url, from: "assets/images/scotus.jpg", to: "/assets/images/scotus.jpg"
  end
end
