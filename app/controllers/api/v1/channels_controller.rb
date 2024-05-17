class Api::V1::ChannelsController < ApiController
  def index
    render json: Server.find(params[:server_id]).channels
  end

  def show
    render json: Channel.find(params[:id])
  end

  def create
    user = current_resource_owner
    unless user.servers.exists?(id: params[:server_id])
      render json: {error: "You are not server owner."}
      return
    end
    server = Server.find(params[:server_id])
    channel = server.channels.build(channel_params)
    if channel.save
      render json: channel
    else
      render json: channel.errors
    end
  end

  def update
    user = current_resource_owner
    unless user.servers.exists?(id: params[:server_id])
      render json: {error: "You are not server owner."}
      return
    end
    channel = Channel.find(params[:id])
    if channel.update(channel_params)
      render json: channel
    else
      render json: channel.errors
    end
  end

  def destroy
    user = current_resource_owner
    unless user.servers.exists?(id: params[:server_id])
      render json: {error: "You are not server owner."}
      return
    end
    channel = Channel.find(params[:id])
    channel.destroy
    render json: channel
  end

  private

  def channel_params
    params.require(:channel).permit(:name)
  end
end
