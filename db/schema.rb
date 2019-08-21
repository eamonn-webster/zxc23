# frozen_string_literal: true

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

ActiveRecord::Schema.define(version: 2019_08_20_233809) do
  # These are extensions that must be enabled in order to support this database
  enable_extension 'plpgsql'

  create_table 'cashbooks', force: :cascade do |t|
    t.string 'title'
    t.integer 'type'
    t.decimal 'opening_value'
    t.integer 'opening_flag'
    t.datetime 'created_at', null: false
    t.datetime 'updated_at', null: false
  end

  create_table 'transactions', force: :cascade do |t|
    t.string 'part'
    t.date 'date'
    t.integer 'code'
    t.decimal 'amount_value'
    t.integer 'amount_flag'
    t.decimal 'balance_value'
    t.integer 'balance_flag'
    t.bigint 'cashbook_id'
    t.datetime 'created_at', null: false
    t.datetime 'updated_at', null: false
    t.index ['cashbook_id'], name: 'index_transactions_on_cashbook_id'
  end
end
