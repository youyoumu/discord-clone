class Api::V1::MessagesController < ApiController
  def create
    user = current_resource_owner
    server = Server.find(params[:server_id])
    unless user.joined_servers.exists?(id: server.id)
      return render json: {error: "You are not server member."}
    end
    channel = Channel.find(params[:channel_id])
    unless server.channels.exists?(id: channel.id)
      return render json: {error: "Channel not found."}
    end
    message = channel.messages.build(message_params)
    message.user = user
    if message.save
      render json: message
    else
      render json: message.errors
    end
  end

  def destroy
    user = current_resource_owner
    message = Message.find(params[:id])
    if message.user != user
      return render json: {error: "You are not message owner."}
    end
    message.destroy
    render json: message
  end

  def update
    user = current_resource_owner
    message = Message.find(params[:id])
    if message.user != user
      return render json: {error: "You are not message owner."}
    end
    if message.update(message_params)
      message.update(edited: true)
      render json: message
    else
      render json: message.errors
    end
  end

  private

  def message_params
    params.require(:message).permit(:content)
  end
end
