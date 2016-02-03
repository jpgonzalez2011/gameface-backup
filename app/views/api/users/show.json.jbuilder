json.id @user.id
json.cover_url @user.cover_photo.image.url(:cover)
json.profile_thumb_url @user.profile_picture.image.url(:thumb)
json.profile_small_url @user.profile_picture.image.url(:small)
json.profile_medium_url @user.profile_picture.image.url(:medium)
