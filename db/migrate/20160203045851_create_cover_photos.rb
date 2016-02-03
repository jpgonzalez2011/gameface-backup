class CreateCoverPhotos < ActiveRecord::Migration
  def change
    create_table :cover_photos do |t|
      t.integer :user_id, null: false
    end

    add_index :cover_photos, :user_id, unique: true
  end
end
