class AddAttachmentImageToCoverPhotos < ActiveRecord::Migration
  def self.up
    change_table :cover_photos do |t|
      t.attachment :image
    end
  end

  def self.down
    remove_attachment :cover_photos, :image
  end
end
