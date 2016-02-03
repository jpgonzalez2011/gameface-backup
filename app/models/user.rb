class User < ActiveRecord::Base
  validates :username, presence: true, uniqueness: true;
  validates :password_digest, :session_token,
            :fname, :date_of_birth, presence: true
  validates :password, length: { minimum: 6, allow_nil: true }

  has_many(
    :photos,
    primary_key: :id,
    foreign_key: :uploader_id,
    class_name: "Photo"
  )

  has_many(
    :posted_posts,
    foreign_key: :poster_id,
    primary_key: :id,
    class_name: "Post"
  )

  has_many(
    :targeted_posts,
    foreign_key: :target_id,
    primary_key: :id,
    class_name: "Post"
  )

  has_many(
    :requested_friendships,
    primary_key: :id,
    foreign_key: :received_friend,
    class_name: "Friendship"
  )

  has_many(
    :received_friendships,
    primary_key: :id,
    foreign_key: :requested_friend,
    class_name: "Friendship"
  )

  has_one(
    :profile_picture,
    primary_key: :id,
    foreign_key: :user_id,
    class_name: "ProfilePicture"
  )

  has_one(
    :cover_photo,
    primary_key: :id,
    foreign_key: :user_id,
    class_name: "CoverPhoto"
  )

  # has_many :requested_friends, through: :requested_friendship
  # has_many :received_friends, through: :received_friendships

  attr_reader :password

  after_initialize :ensure_session_token

  def self.find_by_credentials(username, password)
    user = User.find_by(username: username)
    if user && user.is_password?(password)
      return user
    else
      return nil
    end
  end

  def password=(password)
    self.password_digest = BCrypt::Password.create(password)
  end

  def is_password?(password)
    BCrypt::Password.new(self.password_digest).is_password?(password)
  end

  def reset_session_token!
    self.session_token = SecureRandom::urlsafe_base64(16)
    self.save!
    self.session_token
  end

  def full_name
    name = self.fname
    if self.lname
      name = name + " " + self.lname
    end
    name
  end

  def friends
    requested_friendships = self.requested_friendships.includes(:requested_friend).where(confirmed: true).to_a
    received_friendships = self.received_friendships.includes(:received_friend).where(confirmed: true).to_a
    requested_friends = requested_friendships.map { |friendship| friendship.requested_friend }
    received_friends = received_friendships.map { |friendship| friendship.received_friend }
    all_friends = requested_friends + received_friends
  end

  private

  def ensure_session_token
    self.session_token ||= SecureRandom::urlsafe_base64(16)
  end

end
