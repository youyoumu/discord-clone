class AddDataToUsers < ActiveRecord::Migration[7.1]
  def change
    add_column :users, :avatar_url, :string, default: ""
    add_column :users, :bio, :text, default: ""
    add_column :users, :display_name, :string, default: ""
  end
end
