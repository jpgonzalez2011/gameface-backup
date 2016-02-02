class Api::PhotosController < ApplicationController

  def index
    @photos = Photo.includes(:uploader, comments: :commenter).where(uploader_id: params[:user_id]).order(created_at: :desc)
  end

  def create
    @photo = Photo.new(photo_params)
    if @photo.uploader_id == current_user.id  &&  @photo.save
      render :show
    else
      render json: {}, status: 420
    end
  end

  private

  def photo_params
    params.require(:photo).permit(:uploader_id, :image)
  end
end
