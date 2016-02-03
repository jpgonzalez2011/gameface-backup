class Friendship < ActiveRecord::Base
  validates :received_friend, :requested_friend, presence: true
  validates :requested_friend, uniqueness: { scope: :received_friend }

  belongs_to(
    :received_friend,
    foreign_key: :received_friend,
    primary_key: :id,
    class_name: "User"
  )

  belongs_to(
    :requested_friend,
    foreign_key: :requested_friend,
    primary_key: :id,
    class_name: "User"
  )


end
