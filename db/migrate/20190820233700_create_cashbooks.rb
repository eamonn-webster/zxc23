class CreateCashbooks < ActiveRecord::Migration[5.2]
  def change
    create_table :cashbooks do |t|
      t.string :title
      t.integer :type
      t.decimal :opening_value
      t.integer :opening_flag

      t.timestamps
    end
  end
end
