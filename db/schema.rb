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

ActiveRecord::Schema.define(version: 20160203212646) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "comments", force: :cascade do |t|
    t.integer  "commenter_id",     null: false
    t.text     "content",          null: false
    t.integer  "commentable_id"
    t.string   "commentable_type"
    t.datetime "created_at"
    t.datetime "updated_at"
  end

  add_index "comments", ["commentable_type", "commentable_id"], name: "index_comments_on_commentable_type_and_commentable_id", using: :btree

  create_table "cover_photos", force: :cascade do |t|
    t.integer  "user_id",            null: false
    t.string   "image_file_name"
    t.string   "image_content_type"
    t.integer  "image_file_size"
    t.datetime "image_updated_at"
  end

  add_index "cover_photos", ["user_id"], name: "index_cover_photos_on_user_id", unique: true, using: :btree

  create_table "friendships", force: :cascade do |t|
    t.integer  "received_friend"
    t.integer  "requested_friend"
    t.boolean  "confirmed",        default: false
    t.datetime "created_at"
    t.datetime "updated_at"
  end

  add_index "friendships", ["received_friend"], name: "index_friendships_on_received_friend", using: :btree
  add_index "friendships", ["requested_friend"], name: "index_friendships_on_requested_friend", using: :btree

  create_table "photos", force: :cascade do |t|
    t.integer  "uploader_id",                        null: false
    t.boolean  "cover_photo",        default: false
    t.boolean  "profile_picture",    default: false
    t.datetime "created_at"
    t.datetime "updated_at"
    t.string   "image_file_name"
    t.string   "image_content_type"
    t.integer  "image_file_size"
    t.datetime "image_updated_at"
  end

  add_index "photos", ["uploader_id"], name: "index_photos_on_uploader_id", using: :btree

  create_table "posts", force: :cascade do |t|
    t.integer  "poster_id",  null: false
    t.integer  "target_id",  null: false
    t.text     "content",    null: false
    t.datetime "created_at"
    t.datetime "updated_at"
  end

  add_index "posts", ["poster_id"], name: "index_posts_on_poster_id", using: :btree
  add_index "posts", ["target_id"], name: "index_posts_on_target_id", using: :btree

  create_table "profile_pictures", force: :cascade do |t|
    t.integer  "user_id",            null: false
    t.string   "image_file_name"
    t.string   "image_content_type"
    t.integer  "image_file_size"
    t.datetime "image_updated_at"
  end

  add_index "profile_pictures", ["user_id"], name: "index_profile_pictures_on_user_id", unique: true, using: :btree

  create_table "users", force: :cascade do |t|
    t.string   "username",        null: false
    t.string   "password_digest", null: false
    t.string   "session_token",   null: false
    t.string   "fname",           null: false
    t.string   "lname"
    t.date     "date_of_birth",   null: false
    t.datetime "created_at"
    t.datetime "updated_at"
    t.string   "occupation"
    t.text     "description"
  end

  add_index "users", ["username"], name: "index_users_on_username", unique: true, using: :btree

end
