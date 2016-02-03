json.timeline(@timeline) do |item|
  json.user_id current_user.id
  json.id item.id
  json.type item.class.name
  json.date_and_time item.date_and_time
  if (item.class.name == "Post")
    json.content item.content
    json.poster_name item.poster_name
    json.target_name item.target_name
  elsif (item.class.name == "Photo")
    json.medium_url item.medium_size_url
    json.full_url item.full_size_url
    json.uploader item.uploader.full_name
  end
  json.comments(item.comments.reverse) do |comment|
    json.id comment.id
    json.commenter_name comment.commenter.full_name
    json.date_and_time comment.date_and_time
    json.content comment.content
  end
end
