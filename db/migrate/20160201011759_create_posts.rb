class CreatePosts < ActiveRecord::Migration
  def change
    create_table :posts do |t|
      t.integer :poster_id, null: false
      t.integer :target_id, null: false
      t.text :content, null: false

      t.timestamps
    end

    add_index :posts, :poster_id
    add_index :posts, :target_id
  end
end
