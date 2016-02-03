class Api::UsersController < ApplicationController

  def show
    @user = User.includes(:cover_photo, :profile_picture).find(params[:id])
  end

  def about
    @user = User.find(params[:user_id])
  end

end
