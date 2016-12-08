class Api::OpinionsController < ApplicationController
  def index
    @opinions = Opinion.all
    render :index
  end

  def create
    @opinion = Opinion.new(opinion_params)
    @opinion.transcriber_id = current_user.id
    if @opinion.save
      render :show
    else
      render json: @opinion.errors.messages, status: 422
    end
  end

  def show
    @opinion = Opinion.find(params[:id])
    render :show
  end

  def update
    @opinion = Opinion.find(params[:id])
    if @opinion.update(opinion_params)
      render :show
    else
      render json: @opinon.errors.messages, status: 422
    end
  end

  def destroy
    @opinion = Opinion.find(params[:id])
    if @opinion.destroy
      render :show
    else
      render json: @opinion.errors.messages, status: 422
    end
  end

  private

  def opinion_params
    params.require(:opinion).permit(:case, :citation, :judge, :court, :date, :body, :img_url)
  end
end
