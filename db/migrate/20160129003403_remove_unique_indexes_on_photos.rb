class RemoveUniqueIndexesOnPhotos < ActiveRecord::Migration
  def change
    remove_index :photos, column: ["uploader_id", "cover_photo"]
    remove_index :photos, column: ["uploader_id", "profile_picture"]
  end
end
