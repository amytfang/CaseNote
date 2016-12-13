class ChangeBodyRequirementOnSuggestions < ActiveRecord::Migration
  def change
    change_column_null :suggestions, :body, true, false
  end
end
