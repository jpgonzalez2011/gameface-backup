json.posts(@posts) do |post|
  json.id post.id
  json.target_name (post.target.fname + " " + post.target.lname)
  json.poster_name (post.poster.fname + " " + post.poster.fname)
  json.content post.content
  json.date_and_time post.date_and_time
  json.comments(post.comments) do |comment|
    json.id comment.id
    json.commenter_name (comment.commenter.fname + " " + comment.commenter.lname)
    json.date_and_time comment.date_and_time
    json.content comment.content
  end
end
