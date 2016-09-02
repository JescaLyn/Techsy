class CreateShops < ActiveRecord::Migration
  def change
    create_table :shops do |t|
      t.string :name, null: false
      t.string :description
      t.string :country, null: false
      t.string :currency, default: "USD"
      t.string :kind, null: false
      t.string :image_url
      t.integer :user_id, null: false
      t.timestamps null: false
    end

    add_index :shops, :user_id, unique: true
  end
end
