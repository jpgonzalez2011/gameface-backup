class Post < ActiveRecord::Base
  validates :poster_id, :target_id, :content, presence: true

  belongs_to(
    :poster,
    foreign_key: :poster_id,
    primary_key: :id,
    class_name: "User"
  )

  belongs_to(
    :target,
    foreign_key: :target_id,
    primary_key: :id,
    class_name: "User"
  )

  has_many :comments, as: :commentable

  def poster_name
    name = self.poster.fname
    if self.poster.lname
      name = name + " " + self.poster.lname
    end
    name
  end

  def target_name
    name = self.target.fname
    if self.target.lname
      name = name + " " + self.poster.lname
    end
    name
  end

  def date_and_time
    t = self.created_at.in_time_zone('Eastern Time (US & Canada)')
    t.strftime("%B") + " " + t.strftime("%d") + " " + t.strftime("%Y") + " " + t.strftime('%r')
  end

end
