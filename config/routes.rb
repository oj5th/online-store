Rails.application.routes.draw do
  resources :products

  root 'homepage#index'
  get '/*path' => "homepage#index"
end
