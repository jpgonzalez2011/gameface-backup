json.array!(@photos) do |photo|
  json.extract!(
    photo,
    :id, :medium_size_url, :uploader_id
  )
end
