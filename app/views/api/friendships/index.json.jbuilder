json.friends(@friends) do |friend|
  json.user_id @user.id
  json.friend_id friend.id
  json.full_name friend.full_name
end
