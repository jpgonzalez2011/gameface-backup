class CommentsController < ApplicationController

  def create
    @comment = Comment.new(comment_params)
    if @comment.commenter_id == current_user.id && @comment.save
      render :show
    else
      render json: {}, status: 420
    end
  end

  private

  def comment_params
    params.require(:comment).permit(:commenter_id, :commentable_type, :content)
  end
end
