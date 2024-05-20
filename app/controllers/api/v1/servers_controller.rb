class Api::V1::ServersController < ApiController
  def index
    user = current_resource_owner
    render json: user.joined_servers
  end

  def show
    server = Server.find(params[:id])
    channels = server.channels
    members = server.members
    render json: {server: server, channels: channels, members: members}
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
    if user.joined_servers.exists?(id: server.id)
      return render json: {error: "You are already joined."}
    end
    user.joined_servers << server
    render json: user.joined_servers
  end

  def discover
    user = current_resource_owner
    servers = Server.all.where.not(id: user.joined_servers)
    render json: servers
  end

  def owned
    user = current_resource_owner
    servers = user.servers
    render json: servers
  end

  private

  def server_params
    params.require(:server).permit(:name)
  end
end
