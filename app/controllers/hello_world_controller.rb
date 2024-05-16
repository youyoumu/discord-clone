class HelloWorldController < ApplicationController
  before_action :doorkeeper_authorize!, only: :login_test

  def hello_world
    render json: {message: "Hello, World!!!"}
  end

  def login_test
    render json: {message: "Only logged in users can see this."}
  end
end
