class Photo < ActiveRecord::Base
  has_attached_file :image, styles: { medium: "300x300>" }
  validates_attachment_content_type :image, content_type: /\Aimage\/.*\Z/
  validates :uploader_id, presence: true

  belongs_to(
    :user,
    primary_key: :id,
    foreign_key: :uploader_id,
    class_name: "User"
  )

end
