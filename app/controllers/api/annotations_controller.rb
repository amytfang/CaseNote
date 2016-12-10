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
      render json: {}
    else
      render json: @annotation.errors.messages, status: 422
    end
  end

  private

  def annotation_params
    params.require(:annotation).permit(:body, :start_idx, :length, :opinion_id)
  end
end
