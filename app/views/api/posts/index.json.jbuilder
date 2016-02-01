json.array!(@posts) do |post|
  json.extract!(
    post,
    :id, :target_name, :poster_name, :content, :date_and_time
  )
end
