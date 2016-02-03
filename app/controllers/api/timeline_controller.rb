class Api::TimelineController < ApplicationController

  def index
    @timeline_ids = current_user.friends.map {|friend| friend.id }
    @target_posts = Post.includes(:comments).where(target_id: @timeline_ids)
    @poster_posts = Post.includes(:comments).where(poster_id: @timeline_ids)
    @posts = (@target_posts.to_a + @poster_posts.to_a).uniq { |post| post.id }
    @photos = Photo.includes(:comments).where(uploader_id: @timeline_ids)
    @unsorted_timeline = @posts + @photos
    @timeline = @unsorted_timeline.sort { |x,y| x.created_at <=> y.created_at  }
  end


end
