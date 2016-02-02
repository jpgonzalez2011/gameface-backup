json.photos(@photos) do |photo|
  json.id photo.id
  json.uploader_id photo.uploader_id
  json.uploader_name photo.uploader.full_name
  json.medium_url photo.medium_size_url
  json.full_url photo.full_size_url
  json.thumb_url photo.thumb_size_url
  json.date_and_time photo.date_and_time
  json.comments(photo.comments.reverse) do |comment|
    json.id comment.id
    json.commenter_name comment.commenter.full_name
    json.date_and_time comment.date_and_time
    json.content comment.content
  end
end
