class AddSubtitleColumn < ActiveRecord::Migration
  def change
    add_column :listings, :subtitle, :string, null: false
  end
end
