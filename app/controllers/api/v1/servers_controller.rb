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
    server = Server.find(params[:id])
    unless user.servers.exists?(id: server.id)
      render json: {error: "You are not server owner."}
      return
    end
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
    servers = Server.all.where.not(id: user.joined_servers).includes(:channels, :messages, :members, :user_servers, :user)
    servers = servers.map do |server|
      member_count = server.members.count
      message_count = server.messages.count
      puts "server: #{server.name}, member_count: #{member_count}, message_count: #{message_count}"
      {
        id: server.id,
        user_id: server.user_id,
        name: server.name,
        icon_url: server.icon_url,
        banner_url: server.banner_url,
        description: server.description,
        member_count: member_count,
        message_count: message_count
      }
    end
    render json: servers
  end

  def owned
    user = current_resource_owner
    servers = user.servers
    render json: servers
  end

  def leave
    user = current_resource_owner
    server = Server.find(params[:id])
    if !user.joined_servers.exists?(id: server.id)
      return render json: {error: "You are not joined."}
    end
    if server.user == user
      return render json: {error: "You are server owner."}
    end
    user.joined_servers.delete(server)
    render json: user.joined_servers
  end

  private

  def server_params
    params.require(:server).permit(:name, :description, :icon_url, :banner_url)
  end
end
