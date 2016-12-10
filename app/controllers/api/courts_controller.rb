class Api::CourtsController < ApplicationController
  def index
    @courts = Court.all
    render :index
  end
end
