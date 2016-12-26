class Api::CommentsController < ApplicationController
  before_action :check_logged_in, only: [:create, :destroy, :downvote, :upvote]
  def create
    @comment = Comment.new(comment_params)
    @comment.user_id = current_user.id
    if @comment.save
      render :show
    else
      render json: @comment.errors.messages, status: 422
    end
  end

  def destroy
    @comment = Comment.find(params[:id])
    if @comment.destroy
      render json: @comment.id
    else
      render json: @comment.errors.messages, status: 422
    end
  end

  def downvote; vote(-1); end
  def upvote; vote(1); end

  private

  def comment_params
    params.require(:comment).permit(:opinion_id, :body)
  end

  def vote(direction)
    @comment = Comment.find(params[:id])
    @vote = Vote.find_by_votable(@comment, current_user.id)

    if @vote
      if @vote.status == direction
        @vote.destroy
        render json: 0
      else
        @vote.update(status: direction)
        render json: @vote.status
      end
    else
      @comment.votes.create!(user_id: current_user.id, status: direction)
      render json: direction
    end
  end

end
