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

  private

  def ensure_session_token
    self.session_token ||= SecureRandom::urlsafe_base64(16)
  end

end
