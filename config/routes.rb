Rails.application.routes.draw do
  constraints(lambda { |req| req.format == :json }) do
    resources :tasks, only: :index
    resources :users, only: %i[index create]

  end
  root "home#index"
  get '*path', to: 'home#index', via: :all
end
