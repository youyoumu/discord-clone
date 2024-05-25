class AddDataToServers < ActiveRecord::Migration[7.1]
  def change
    add_column :servers, :icon_url, :string, default: ""
    add_column :servers, :banner_url, :string, default: ""
    add_column :servers, :description, :text, default: ""
  end
end
