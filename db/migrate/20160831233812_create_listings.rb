class CreateListings < ActiveRecord::Migration
  def change
    create_table :listings do |t|
      t.string :title, null: false
      t.float :price, null: false
      t.integer :quantity, null: false
      t.text :description, null: false
      t.string :image_url
      t.timestamps null: false
    end
  end
end
