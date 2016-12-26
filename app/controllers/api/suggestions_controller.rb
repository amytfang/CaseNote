class Api::SuggestionsController < ApplicationController
  before_action :check_logged_in, only: [:create, :update, :destroy, :downvote, :upvote]
  def create
    @suggestion = Suggestion.new(suggestion_params)
    @suggestion.user_id = current_user.id
    if @suggestion.save
      render :show
    else
      render json: @suggestion.errors.messages, status: 422
    end
  end

  def update
    @suggestion = Suggestion.find(params[:id])
    if @suggestion.update(suggestion_params)
      render :show
    else
      render json: @suggestion.errors.messages, status: 422
    end
  end

  def destroy
    @suggestion = Suggestion.find(params[:id])
    if @suggestion.destroy
      render json: @suggestion.id
    else
      render json: @suggestion.errors.messages, status: 422
    end
  end

  def downvote; vote(-1); end
  def upvote; vote(1); end

  private

  def suggestion_params
    params.require(:suggestion).permit(:annotation_id, :suggestion_type, :body)
  end

  def vote(direction)
    @suggestion = Suggestion.find(params[:id])
    @vote = Vote.find_by_votable(@suggestion, current_user.id)

    if @vote
      if @vote.status == direction
        @vote.destroy
        render json: 0
      else
        @vote.update(status: direction)
        render json: @vote.status
      end
    else
      @suggestion.votes.create!(user_id: current_user.id, status: direction)
      render json: direction
    end
  end
end
