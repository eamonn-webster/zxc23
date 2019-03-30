#
# File: routes.rb
# Author: eamonn.webster@gmail.com
# Copyright eweb, 2017-2019
# Contents:
#
# Date:          Author:  Comments:
# 30th Mar 2019  eweb     #0013 Google auth
#
Rails.application.routes.draw do
  resources :books
  resources :accounts
  resources :users
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

  get 'login', to: 'logins#new'
  get 'login/create', to: 'logins#create', as: :create_login
end
