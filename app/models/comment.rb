class Comment < ActiveRecord::Base
  validates :commenter_id, :content, presence: true
  belongs_to(
    :commenter,
    foreign_key: :commenter_id,
    primary_key: :id,
    class_name: "User"
  )
  belongs_to :commentable, polymorphic: true

  def commenter_name
    name = self.commenter.fname
    if self.commenter.lname
      name = name + " " + self.commenter.lname
    end
    name
  end

  def date_and_time
    t = self.created_at.in_time_zone('Eastern Time (US & Canada)')
    t.strftime("%B") + " " + t.strftime("%d") + " " + t.strftime("%Y") + " " + t.strftime('%r')
  end

end
