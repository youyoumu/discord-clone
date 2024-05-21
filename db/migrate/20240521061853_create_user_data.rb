class CreateUserData < ActiveRecord::Migration[7.1]
  def change
    create_table :user_data do |t|
      t.references :user, null: false, foreign_key: true
      t.string :avatar_url
      t.text :bio
      t.string :display_name

      t.timestamps
    end
  end
end
