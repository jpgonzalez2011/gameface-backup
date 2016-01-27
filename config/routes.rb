Rails.application.routes.draw do
  root to: 'static_pages#root'

  resources :users, only: [:new, :create, :show]
  resources :static_pages, only: [:index]
  resource :session, only: [:new, :create, :destroy]
end
