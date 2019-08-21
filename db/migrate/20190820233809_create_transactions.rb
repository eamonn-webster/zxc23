class CreateTransactions < ActiveRecord::Migration[6.0]
  def change
    create_table :transactions do |t|
      t.string :part
      t.date :date
      t.integer :code
      t.decimal :amount_value
      t.integer :amount_flag
      t.decimal :balance_value
      t.integer :balance_flag
      t.references :cashbook

      t.timestamps
    end
  end
end
