class AddUserColumns < ActiveRecord::Migration
  def change
    add_column :users, :fname, :string, null: false
    add_column :users, :lname, :string, null: false
    add_column :users, :gender, :string, null: false
    add_column :users, :email, :string, null: false
  end
end
