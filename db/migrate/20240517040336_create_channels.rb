class CreateChannels < ActiveRecord::Migration[7.1]
  def change
    create_table :channels do |t|
      t.string :name
      t.references :server, null: false, foreign_key: true

      t.timestamps
    end
  end
end
