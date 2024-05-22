class Api::V1::UsersController < ApiController
  def me
    user = current_resource_owner
    render json: user
  end

  def update_me
    user = current_resource_owner
    if user.update(user_params)
      render json: user
    else
      render json: user.errors
    end
  end

  private

  def user_params
    params.require(:user).permit(:bio, :avatar_url, :display_name)
  end
end
