class RemoveNotNullConstraintFromLnameOnUsers < ActiveRecord::Migration
  def change
    change_column :users, :lname, :string, null: true
  end
end
