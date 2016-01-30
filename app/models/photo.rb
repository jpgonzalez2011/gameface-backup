class Photo < ActiveRecord::Base
  has_attached_file :image, styles: { medium: "200x200>", thumb: "30x30>" }
  validates_attachment_content_type :image, content_type: /\Aimage\/.*\Z/
  validates :uploader_id, presence: true

  belongs_to(
    :user,
    primary_key: :id,
    foreign_key: :uploader_id,
    class_name: "User"
  )

  def medium_size_url
    self.image.url(:medium)
  end

  def thumb_size_url
    self.image.url(:thumb)
  end

end
