class Api::OpinionsController < ApplicationController
  before_action :check_logged_in, only: [:create, :update, :destroy]

  def index
    @opinions = Opinion.all.includes(:court, :judge)
    render :index
  end

  def create
    @opinion = Opinion.new(opinion_params)
    @opinion.image = URI.parse(opinion_params[:image]) if opinion_params[:image]
    @opinion.transcriber_id = current_user.id if logged_in?
    if @opinion.save
      render :show
    else
      render json: @opinion.errors.messages, status: 422
    end
  end

  def show
    @opinion = Opinion.where(id: params[:id]).includes(:court, :judge, :annotations, comments: [:user, votes: [:user]]).first
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
      render json: {}
    else
      render json: @opinion.errors.messages, status: 422
    end
  end

  def search
    @opinions = Opinion.search(params[:query])
    render json: @opinions.to_json
  end

  private

  def opinion_params
    params.require(:opinion).permit(:case, :citation, :judge_id, :court_id, :date, :body, :image)
  end
end
