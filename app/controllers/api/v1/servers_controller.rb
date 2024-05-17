class Api::V1::ServersController < ApiController
  def index
    render json: Server.all
  end

  def show
    render json: Server.find(params[:id])
  end

  def create
    user = current_resource_owner
    server = user.servers.build(server_params)
    if server.save
      render json: server
    else
      render json: server.errors
    end
  end

  def update
    server = Server.find(params[:id])
    if server.update(server_params)
      render json: server
    else
      render json: server.errors
    end
  end

  def destroy
    server = Server.find(params[:id])
    server.destroy
    render json: server
  end

  private

  def server_params
    params.require(:server).permit(:name)
  end
end
