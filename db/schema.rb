# encoding: UTF-8
# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 20160908205757) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "cart_items", force: :cascade do |t|
    t.integer  "user_id",                null: false
    t.integer  "listing_id",             null: false
    t.integer  "quantity",   default: 1, null: false
    t.datetime "created_at",             null: false
    t.datetime "updated_at",             null: false
  end

  add_index "cart_items", ["listing_id"], name: "index_cart_items_on_listing_id", using: :btree
  add_index "cart_items", ["user_id", "listing_id"], name: "index_cart_items_on_user_id_and_listing_id", unique: true, using: :btree
  add_index "cart_items", ["user_id"], name: "index_cart_items_on_user_id", using: :btree

  create_table "listings", force: :cascade do |t|
    t.string   "title",                               null: false
    t.decimal  "price",       precision: 8, scale: 2, null: false
    t.integer  "quantity",                            null: false
    t.text     "description",                         null: false
    t.string   "image_url"
    t.datetime "created_at",                          null: false
    t.datetime "updated_at",                          null: false
    t.integer  "shop_id",                             null: false
    t.string   "subtitle",                            null: false
  end

  add_index "listings", ["shop_id"], name: "index_listings_on_shop_id", using: :btree

  create_table "reviews", force: :cascade do |t|
    t.integer  "user_id",                null: false
    t.integer  "listing_id",             null: false
    t.integer  "rating",     default: 0, null: false
    t.text     "comment"
    t.datetime "created_at",             null: false
    t.datetime "updated_at",             null: false
  end

  add_index "reviews", ["listing_id"], name: "index_reviews_on_listing_id", using: :btree
  add_index "reviews", ["user_id"], name: "index_reviews_on_user_id", using: :btree

  create_table "shops", force: :cascade do |t|
    t.string   "name",                        null: false
    t.string   "description"
    t.string   "country",                     null: false
    t.string   "currency",    default: "USD"
    t.string   "kind",                        null: false
    t.string   "image_url"
    t.integer  "user_id",                     null: false
    t.datetime "created_at",                  null: false
    t.datetime "updated_at",                  null: false
  end

  add_index "shops", ["user_id"], name: "index_shops_on_user_id", unique: true, using: :btree

  create_table "users", force: :cascade do |t|
    t.string   "username",        null: false
    t.string   "password_digest", null: false
    t.string   "session_token",   null: false
    t.datetime "created_at",      null: false
    t.datetime "updated_at",      null: false
    t.string   "fname"
    t.string   "lname"
    t.string   "email",           null: false
  end

  add_index "users", ["email"], name: "index_users_on_email", unique: true, using: :btree
  add_index "users", ["session_token"], name: "index_users_on_session_token", unique: true, using: :btree
  add_index "users", ["username"], name: "index_users_on_username", unique: true, using: :btree

end
