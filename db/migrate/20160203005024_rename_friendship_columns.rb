class RenameFriendshipColumns < ActiveRecord::Migration
  def change
    rename_column :friendships, :user_id, :received_friend
    rename_column :friendships, :friend_id, :requested_friend
  end
end
