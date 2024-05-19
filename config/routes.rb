Rails.application.routes.draw do
  namespace :api do
    namespace :v1 do
      resources :servers do
        resources :channels
        member do
          post :join
        end
      end
      get :discover, to: "servers#discover"
      resources :messages, only: [:create]
      get :me, to: "users#me"
    end
  end

  use_doorkeeper
  get "hello_world", to: "hello_world#hello_world"
  get "hello_world/login_test", to: "hello_world#login_test"

  devise_for :users
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Reveal health status on /up that returns 200 if the app boots with no exceptions, otherwise 500.
  # Can be used by load balancers and uptime monitors to verify that the app is live.
  get "up" => "rails/health#show", :as => :rails_health_check

  # Defines the root path route ("/")
  # root "posts#index"
end
