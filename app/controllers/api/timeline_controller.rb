class Api::TimelineController < ApplicationController

  def index
    @friend_ids = current_user.friends.map {|friend| friend.id }
    @timeline_ids = @friend_ids.push(current_user.id)
    @target_posts = Post.includes(:poster, :target, comments: :commenter).where(target_id: @timeline_ids)
    @poster_posts = Post.includes(:poster, :target, comments: :commenter).where(poster_id: @timeline_ids)
    @posts = (@target_posts.to_a + @poster_posts.to_a).uniq { |post| post.id }
    @photos = Photo.includes(:uploader, comments: :commenter).where(uploader_id: @timeline_ids)
    @unsorted_timeline = @posts + @photos
    @timeline = @unsorted_timeline.sort { |y,x| x.created_at <=> y.created_at  }
  end


end
