class CreateUserServers < ActiveRecord::Migration[7.1]
  def change
    create_table :user_servers do |t|
      t.references :user, null: false, foreign_key: true
      t.references :server, null: false, foreign_key: true

      t.timestamps
    end
  end
end
