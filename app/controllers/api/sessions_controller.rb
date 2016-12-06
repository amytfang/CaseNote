class Api::SessionsController < ApplicationController
  def create
    @user = User.find_by_credentials(
      params[:user][:username],
      params[:user][:password]
    )


    if @user.nil?

      render json: ["Invalid Credentials"], status: 401
    else
      login!(@user)
      render "api/users/show"
    end
  end

  def destroy
    @user = current_user
    if @user
      logout!
      render json: {}
    else
      render json: ["No one is signed in"], status: 404
    end
  end
end
