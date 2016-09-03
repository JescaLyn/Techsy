class Api::ListingsController < ApplicationController
  def index
    @listings = Listing.all
  end

  def show
    @listing = Listing.find_by(id: params[:id])
  end

  def create
    @listing = Listing.new(listing_params)

    if @listing.save
      render :show
    else
      render json: @listing.errors.full_messages, status: 422
    end
  end

  def update
    @listing = Listing.find_by(id: params[:id])

    if @listing.update(listing_params)
      render :show
    else
      render json: @listing.errors.full_messages, status: 422
    end
  end

  def destroy
    @listing = Listing.find_by(id: params[:id])

    if @listing
      @listing.destroy
      render :index
    else
      render json: ["Could not find listing"], status: 404
    end
  end

  private

  def listing_params
    params
      .require(:listing)
      .permit(:title, :subtitle, :price, :quantity, :description, :image_url, :shop_id)
  end
end
