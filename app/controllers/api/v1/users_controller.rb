class Api::V1::UsersController < ApiController
  def me
    user = current_resource_owner
    data = user.user_datum
    render json: {user: user, data: data}
  end

  def update
    user = current_resource_owner
    if user.user_datum.nil?
      user.user_datum = UserDatum.new
      user.user_datum.save
    end
    if user.user_datum.update(user_datum_params)
      render json: user.user_datum
    else
      render json: user.user_datum.errors
    end
  end

  private

  def user_datum_params
    params.require(:user_datum).permit(:bio, :avatar_url, :display_name)
  end
end
