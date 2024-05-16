class HelloWorldController < ApplicationController
  def hello_world
    render json: {message: "Hello, World!"}
  end
end
