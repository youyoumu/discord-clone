class AddEditedToMessages < ActiveRecord::Migration[7.1]
  def change
    add_column :messages, :edited, :boolean
  end
end
