class Api::AnnotationsController < ApplicationController
  # before_action :check_logged_in, only: [:create, :update, :destroy]

  def create
    @annotation = Annotation.new(annotation_params)
    @annotation.user_id = current_user.id if logged_in?
    if @annotation.save
      render :show
    else
      render json: @annotation.errors.messages, status: 422
    end
  end

  def show
    @annotation = Annotation.find(params[:id])
    render :show
  end

  def update
    @annotation = Annotation.find(params[:id])
    if @annotation.update(annotation_params)
      render :show
    else
      render json: @annotation.errors.messages, status: 422
    end
  end

  def destroy
    @annotation = Annotation.find(params[:id])
    if @annotation.destroy
      render json: @annotation.id
    else
      render json: @annotation.errors.messages, status: 422
    end
  end

  def downvote; vote(-1); end
  def upvote; vote(1); end

  private

  def annotation_params
    params.require(:annotation).permit(:body, :start_idx, :length, :opinion_id)
  end

  def vote(direction)
    @annotation = Annotation.find(params[:id])
    @vote = Vote.find_by_votable(@annotation, current_user.id)

    if @vote
      if @vote.status == direction
        @vote.destroy
        render json: 0
      else
        @vote.update(status: direction)
        render json: @vote.status
      end
    else
      @annotation.votes.create!(user_id: current_user.id, status: direction)
      render json: direction
    end
  end
end
