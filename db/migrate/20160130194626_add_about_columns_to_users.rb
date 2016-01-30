class AddAboutColumnsToUsers < ActiveRecord::Migration
  def change
    add_column :users, :occupation, :string
    add_column :users, :description, :text
  end
end
