class AddUserIdColumnToListing < ActiveRecord::Migration
  def change
    add_column :listings, :user_id, :integer, null: false
    add_index :listings, :user_id, unique: true
  end
end
