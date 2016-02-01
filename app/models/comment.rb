class Comment < ActiveRecord::Base
  validates :commenter_id, :content, presence: true
  belongs_to(
    :commenter,
    foreign_key: :commenter_id,
    primary_key: :id,
    class_name: "User"
  )
  belongs_to :commentable, polymorphic: true



end
