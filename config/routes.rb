Rails.application.routes.draw do
  namespace :api do
    namespace :v1 do
      defaults format: :json do
        resources :products
      end
    end
  end
  resources :products

  root 'homepage#index'
  get '/*path' => "homepage#index"
end
