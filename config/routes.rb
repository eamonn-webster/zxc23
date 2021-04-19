# frozen_string_literal: true

Rails.application.routes.draw do
  devise_for :users
  resources :transactions
  resources :cashbooks
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html

  root to: 'cashbook#index'

  get 'users/check_for_user', to: 'users#check_for_user'

  # devise_for :users,
  #            path: '',
  #            path_names: {
  #              sign_in: 'login',
  #              sign_out: 'logout',
  #              registration: 'signup'
  #            },
  #            controllers: {
  #              sessions: 'sessions',
  #              registrations: 'registrations'
  #            }
end
