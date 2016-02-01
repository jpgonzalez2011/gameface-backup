class Api::SessionsController < ApplicationController

  def show
    if current_user
      @user = current_user
      render json: [{id: @user.id, username: @user.username, fname: @user.fname}]
    else
      render json: [{id: "no-user-found"}]
    end
  end

  def create
    @user = User.find_by_credentials(
        params[:username],
        params[:password]
      )
    if @user
      sign_in!(@user)
      render json: [{id: @user.id, username: @user.username}]
    else
      render json: ["Invalid Credentials!"], status: 401
    end
  end

  def destroy
    sign_out!
    render json: {}
  end
end
