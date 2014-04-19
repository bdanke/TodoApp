TodoApp::Application.routes.draw do
  root :to => "site#root"

  namespace :api, :defaults => { format: :json } do
    resources :todos, only: [:create, :destroy, :index]
  end
end
