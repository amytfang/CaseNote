Rails.application.routes.draw do
  namespace :api, defaults: { format: :json } do
    resources :users, only: [:create]
    resource :session, only: [:create, :destroy]
    resources :opinions, only: [:index, :show, :create, :update, :destroy] do
      collection do
        get 'search'
      end
    end
    resources :courts, only: [:index]
    resources :judges, only: [:index]

    resources :annotations, only: [:create, :show, :update, :destroy] do
      member do
        post "downvote"
        post "upvote"
      end
    end

    resources :suggestions, only: [:create, :update, :destroy] do
      member do
        post "downvote"
        post "upvote"
      end
    end

    resources :comments, only: [:create, :destroy] do
      member do
        post "downvote"
        post "upvote"
      end
    end
  end

  root "static_pages#root"
end
