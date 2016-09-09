Rails.application.routes.draw do
  root to: "static_pages#root"

  namespace :api, defaults: { format: :json } do
    resources :users, only: [:create, :show]
    resource :session, only: [:create, :destroy]
    resources :listings, only: [:index, :show, :create, :update, :destroy]
    get '/search_terms', to: 'listings#search_terms'
    resources :shops, only: [:show, :create, :update]
    resources :cart_items, only: [:show]
    patch '/cart_items', to: 'cart_items#update'
    patch '/cart_items/cart', to: 'cart_items#update_cart'
    delete '/cart_items', to: 'cart_items#destroy'
    delete '/cart_items/cart', to: 'cart_items#destroy_cart'
  end
end
