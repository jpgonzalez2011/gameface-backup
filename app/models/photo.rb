class Photo < ActiveRecord::Base
  has_attached_file :image, styles: { medium: "200x200>", thumb: "30x30>" }
  validates_attachment_content_type :image, content_type: /\Aimage\/.*\Z/
  validates :uploader_id, presence: true

  belongs_to(
    :uploader,
    primary_key: :id,
    foreign_key: :uploader_id,
    class_name: "User"
  )

  has_many :comments, as: :commentable

  def full_size_url
    self.image.url
  end

  def medium_size_url
    self.image.url(:medium)
  end

  def thumb_size_url
    self.image.url(:thumb)
  end

  def date_and_time
    t = self.created_at.in_time_zone('Eastern Time (US & Canada)')
    t.strftime("%B") + " " + t.strftime("%d") + " " + t.strftime("%Y") + " " + t.strftime('%r')
  end

end
