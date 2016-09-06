class Api::ShopsController < ApplicationController
  def show
    @shop = Shop.find_by(id: params[:id])
  end

  def create
    @shop = Shop.new(shop_params)

    if @shop.save
      render :show
    else
      render json: @shop.errors.full_messages, status: 422
    end
  end

  def update
    @shop = Shop.find_by(id: params[:id])

    if @shop.update(shop_params)
      render :show
    else
      render json: @shop.errors.full_messages, status: 422
    end
  end

  private

  def shop_params
    params
      .require(:shop)
      .permit(:name, :description, :country, :currency, :kind, :image_url, :user_id)
  end
end
