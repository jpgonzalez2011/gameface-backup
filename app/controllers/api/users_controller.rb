class Api::UsersController < ApplicationController

  def show
    @user = User.find(params[:id])
  end

  def about
    @user = User.find(params[:user_id])
  end

end
