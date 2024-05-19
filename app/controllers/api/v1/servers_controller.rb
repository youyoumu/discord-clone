class Api::V1::ServersController < ApiController
  def index
    user = current_resource_owner
    render json: user.joined_servers
  end

  def show
    server = Server.find(params[:id])
    channels = server.channels
    render json: {server: server, channels: channels}
  end

  def create
    user = current_resource_owner
    server = user.servers.build(server_params)
    user.joined_servers << server
    if server.save
      render json: server
    else
      render json: server.errors
    end
  end

  def update
    user = current_resource_owner
    unless user.servers.exists?(id: params[:id])
      render json: {error: "You are not server owner."}
      return
    end
    server = Server.find(params[:id])
    if server.update(server_params)
      render json: server
    else
      render json: server.errors
    end
  end

  def destroy
    user = current_resource_owner
    unless user.servers.exists?(id: params[:id])
      render json: {error: "You are not server owner."}
      return
    end
    server = Server.find(params[:id])
    server.destroy
    render json: server
  end

  def join
    user = current_resource_owner
    server = Server.find(params[:id])
    user.joined_servers << server
    render json: user.joined_servers
  end

  def discover
    servers = Server.all
    render json: servers
  end

  private

  def server_params
    params.require(:server).permit(:name)
  end
end
