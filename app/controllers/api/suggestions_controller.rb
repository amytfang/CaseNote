class Api::SuggestionsController < ApplicationController
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
    if @suggestion.updated(suggestion_params)
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

  private

  def suggestion_params
    params.require(:suggestion).permit(:annotation_id, :suggestion_type, :body)
  end
end
