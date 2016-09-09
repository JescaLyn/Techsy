class Api::ListingsController < ApplicationController
  def index
    if shop_id
      @listings = Listing.where("shop_id = ?", shop_id)
    elsif search_filter
      @listings = Listing.by_search_filter(search_filter)
    else
      @listings = Listing.all
    end
  end

  def show
    @listing = Listing.find_by(id: params[:id])
  end

  def create
    @listing = Listing.new(listing_params)
    @listing.shop_id = current_user.shop.id

    if @listing.save
      render :show
    else
      render json: @listing.errors.full_messages, status: 422
    end
  end

  def update
    @listing = Listing.find_by(id: params[:id])
    @listing.shop_id = current_user.shop.id

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

  def search_terms
    @search_terms = Listing.search_terms
    render json: @search_terms
  end

  private

  def listing_params
    params
      .require(:listing)
      .permit(:title, :subtitle, :price, :quantity, :description, :image_url)
  end

  def shop_id
    params[:shop_id]
  end

  def search_filter
    params[:search_filter]
  end
end
