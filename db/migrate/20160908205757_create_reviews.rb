class CreateReviews < ActiveRecord::Migration
  def change
    create_table :reviews do |t|
      t.integer :user_id, null: false
      t.integer :listing_id, null: false
      t.integer :rating, null: false, default: 0
      t.text :comment
      t.timestamps null: false
    end

    add_index :reviews, :user_id
    add_index :reviews, :listing_id
  end
end
