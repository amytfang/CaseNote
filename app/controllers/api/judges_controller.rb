class Api::JudgesController < ApplicationController
  def index
    @judges = Judge.all
    render :index
  end
end
