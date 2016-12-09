class EditDefaultImageUrlPartTwo < ActiveRecord::Migration
  def change
    change_column_default :opinions, :img_url, "/assets/images/scotus.jpg"
  end
end
