class RemoveCoverPhotoandProfileColumnsFromUsers < ActiveRecord::Migration
  def change
    remove_column :users, :cover_photo
    remove_column :users, :profile_photo
  end
end
