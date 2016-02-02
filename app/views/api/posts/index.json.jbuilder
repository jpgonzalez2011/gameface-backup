json.posts(@posts) do |post|
  json.id post.id
  json.target_name post.target.full_name
  json.poster_name post.poster.full_name
  json.content post.content
  json.date_and_time post.date_and_time
  json.comments(post.comments.reverse) do |comment|
    json.id comment.id
    json.commenter_name comment.commenter.full_name
    json.date_and_time comment.date_and_time
    json.content comment.content
  end
end
