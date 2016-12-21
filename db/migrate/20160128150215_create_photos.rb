class CreatePhotos < ActiveRecord::Migration
  def change
    create_table :photos do |t|
      t.integer :uploader_id, null: false
      t.boolean :cover_photo, default: false
      t.boolean :profile_picture, default: false

      t.timestamps
    end

    add_index :photos, :uploader_id
    add_index :photos, [:uploader_id, :cover_photo], unique: true
    add_index :photos, [:uploader_id, :profile_picture], unique: true
  end
end
