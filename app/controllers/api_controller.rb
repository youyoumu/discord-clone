class ApiController < ApplicationController
  # before_action :doorkeeper_authorize!
  before_action :authenticate_devise_api_token!
  before_action :set_last_visit

  private

  def current_resource_owner
    # User.find(doorkeeper_token.resource_owner_id) if doorkeeper_token
    current_devise_api_user
  end

  def set_last_visit
    user = current_resource_owner
    if user.last_visit.nil?
      user.update(last_visit: Time.now)
    elsif Time.now - user.last_visit > 1800
      user.update(last_visit: Time.now)
    end
  end
end
