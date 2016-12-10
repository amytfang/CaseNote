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

ActiveRecord::Schema.define(version: 20161210194437) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "annotations", force: :cascade do |t|
    t.integer  "start_idx",  null: false
    t.integer  "length",     null: false
    t.text     "body",       null: false
    t.integer  "opinion_id", null: false
    t.integer  "user_id",    null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  add_index "annotations", ["opinion_id"], name: "index_annotations_on_opinion_id", using: :btree
  add_index "annotations", ["user_id"], name: "index_annotations_on_user_id", using: :btree

  create_table "courts", force: :cascade do |t|
    t.string   "name",       null: false
    t.string   "citation",   null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "judges", force: :cascade do |t|
    t.datetime "created_at",         null: false
    t.datetime "updated_at",         null: false
    t.string   "name",               null: false
    t.string   "image_file_name"
    t.string   "image_content_type"
    t.integer  "image_file_size"
    t.datetime "image_updated_at"
  end

  create_table "opinions", force: :cascade do |t|
    t.string   "case",               null: false
    t.string   "citation",           null: false
    t.date     "date",               null: false
    t.text     "body",               null: false
    t.integer  "transcriber_id",     null: false
    t.datetime "created_at",         null: false
    t.datetime "updated_at",         null: false
    t.integer  "judge_id",           null: false
    t.integer  "court_id",           null: false
    t.string   "image_file_name"
    t.string   "image_content_type"
    t.integer  "image_file_size"
    t.datetime "image_updated_at"
  end

  add_index "opinions", ["case"], name: "index_opinions_on_case", using: :btree
  add_index "opinions", ["citation"], name: "index_opinions_on_citation", unique: true, using: :btree
  add_index "opinions", ["court_id"], name: "index_opinions_on_court_id", using: :btree
  add_index "opinions", ["judge_id"], name: "index_opinions_on_judge_id", using: :btree
  add_index "opinions", ["transcriber_id"], name: "index_opinions_on_transcriber_id", using: :btree

  create_table "users", force: :cascade do |t|
    t.string   "username",        null: false
    t.string   "password_digest", null: false
    t.string   "session_token",   null: false
    t.datetime "created_at",      null: false
    t.datetime "updated_at",      null: false
  end

  add_index "users", ["session_token"], name: "index_users_on_session_token", unique: true, using: :btree
  add_index "users", ["username"], name: "index_users_on_username", unique: true, using: :btree

end
