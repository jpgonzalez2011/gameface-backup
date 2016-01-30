json.array!(@photos) do |photo|
  json.extract!(
    photo,
    :id, :medium_size_url
  )
end
