# This file should ensure the existence of records required to run the application in every environment (production,
# development, test). The code here should be idempotent so that it can be executed at any point in every environment.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Example:
#
#   ["Action", "Comedy", "Drama", "Horror"].each do |genre_name|
#     MovieGenre.find_or_create_by!(name: genre_name)
#   end
discord_clone = Doorkeeper::Application.create(name: "discord-clone", redirect_uri: "http://localhost:3000/oauth/callback/discord-clone", scopes: ["read", "write"])
puts "Created #{discord_clone.name}"
puts "uid: #{discord_clone.uid}"
puts "secret: #{discord_clone.secret}"
