class Api::V1::UsersController < ApiController
  def me
    render json: current_resource_owner
  end
end
