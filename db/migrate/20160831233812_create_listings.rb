class CreateListings < ActiveRecord::Migration
  def change
    create_table :listings do |t|
      t.string :title, null: false
      t.decimal :price, null: false, scale: 2, precision: 8
      t.integer :quantity, null: false
      t.text :description, null: false
      t.string :image_url
      t.timestamps null: false
    end
  end
end
