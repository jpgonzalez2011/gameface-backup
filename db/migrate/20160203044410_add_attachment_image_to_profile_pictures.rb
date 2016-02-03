class AddAttachmentImageToProfilePictures < ActiveRecord::Migration
  def self.up
    change_table :profile_pictures do |t|
      t.attachment :image
    end
  end

  def self.down
    remove_attachment :profile_pictures, :image
  end
end
