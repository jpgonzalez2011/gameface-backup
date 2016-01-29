class Api::PhotosController < ApplicationController

  def index
    @photos = Photo.where(uploader_id: params[:user_id])
  end

end
