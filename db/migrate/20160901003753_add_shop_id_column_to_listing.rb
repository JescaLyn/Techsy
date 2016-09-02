class AddShopIdColumnToListing < ActiveRecord::Migration
  def change
    add_column :listings, :shop_id, :integer, null: false
    add_index :listings, :shop_id
  end
end
