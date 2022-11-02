Rails.application.routes.draw do

  constraints(lambda { |req| req.format == :json }) do
    resources :tasks, except: %i[new edit], param: :id
    resources :users, only: %i[index create]
    resource :session, only: %i[create destroy]
  end
  resource :arrays, only: [:create]

  root "home#index"
  get '*path', to: 'home#index', via: :all
end
