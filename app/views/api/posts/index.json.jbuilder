json.array!(@posts) do |post|
  json.extract!(
    post,
    :id, :target_name, :poster_name, :target_name, :content, :date_and_time,
    :comments
  )
end
