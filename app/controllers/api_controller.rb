class ApiController < ApplicationController
  skip_before_action :verify_authenticity_token
  before_action :doorkeeper_authorize!
  # before_action :set_last_visit

  private

  def current_resource_owner
    User.find(doorkeeper_token.resource_owner_id) if doorkeeper_token
  end

  def set_last_visit
    user = current_resource_owner
    if user.last_visit.nil?
      user.update(last_visit: Time.now)
    elsif Time.now - user.last_visit > 60
      user.update(last_visit: Time.now)
    end
  end
end
