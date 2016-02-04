json.friends(@friends) do |friend|
  json.user_id @user.id
  json.id friend.id
  json.username friend.username
  json.full_name friend.full_name
  json.birthday friend.date_of_birth
  json.occupation friend.occupation
  json.description friend.description
  json.cover_url friend.cover_photo.image.url(:cover)
  json.profile_thumb_url friend.profile_picture.image.url(:thumb)
  json.profile_small_url friend.profile_picture.image.url(:small)
  json.profile_medium_url friend.profile_picture.image.url(:medium)
end
