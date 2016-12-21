class CreateUsers < ActiveRecord::Migration
  def change
    create_table :users do |t|
      t.string :username, null: false
      t.string :password_digest, null: false
      t.string :session_token, null: false
      t.string :fname, null: false
      t.string :lname, null: false
      t.date :date_of_birth, null: false

      t.timestamps
    end

    add_index :users, :username, unique: true
  end
end
