class ProfilePicture < ActiveRecord::Base
  validates :user_id, presence: true, uniqueness: true

end
