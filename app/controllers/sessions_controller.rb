class SessionsController < ApplicationController

  def new
  end

  def create
    @user = User.find_by_credentials(
        params[:user][:username],
        params[:user][:password]
      )
    if @user
      sign_in!(@user)
      redirect_to user_url(@user) #redirect to timeline when feature implemented
    else
      flash.now[:errors] = "Invalid Credentials!"
      render :new
    end
  end

  def destroy
    sign_out!
    render :new
  end
end
