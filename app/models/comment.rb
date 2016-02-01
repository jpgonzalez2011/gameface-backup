class Comment < ActiveRecord::Base
  validates :commenter_id, :content, presence: true

  belongs_to :commentable, polymorphic: true



end
