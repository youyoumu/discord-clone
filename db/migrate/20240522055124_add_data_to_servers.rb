class AddDataToServers < ActiveRecord::Migration[7.1]
  def change
    add_column :servers, :icon_url, :string
    add_column :servers, :banner_url, :string
    add_column :servers, :description, :text
  end
end
