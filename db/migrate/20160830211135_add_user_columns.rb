class AddUserColumns < ActiveRecord::Migration
  def change
    add_column :users, :fname, :string 
    add_column :users, :lname, :string
    add_column :users, :email, :string, null: false
  end
end
