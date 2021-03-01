class CreateProducts < ActiveRecord::Migration[6.1]
  def change
    create_table :products do |t|
      t.string :sku
      t.string :name
      t.text :details
      t.decimal :price
      t.integer :status, :default => 0

      t.timestamps
    end
  end
end
