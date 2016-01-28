class Photo < ActiveRecord::Base
  has_attached_file :image
  validates_attachment_content_type :image, content_type: /\Aimage\/.*\Z/
  validates :uploader_id, presence: true
  validates :cover_photo, uniqueness: { scope: :uploader_id }
  validates :profile_picture, uniqueness: { scope: :uploader_id }

end
