class Api::CartItemsController < ApplicationController
  def update
    in_cart = params[:in_cart] || false
    update_cart_item(params[:listing_id], params[:quantity], params[:in_cart])
    render :show
  end

  def update_cart
    cart = params[:cart] || {}
    cart.keys.each do |key|
      item = cart[key]
      update_cart_item(item[:listing_id], item[:quantity], false)
    end

    @cart_items = current_user.cart_items.includes(:listing).includes(:shop)
    render :index
  end

  def destroy
    @cart_item = cart_find(params[:listing_id])
    @cart_item.destroy
    render json: {}
  end

  def destroy_cart
    user_id = current_user.id
    CartItem.where(user_id: user_id).destroy_all
    render json: {}
  end

  def show
    @cart_item = CartItem.find_by(id: params[:id])
  end

  private

  def cart_find(listing_id)
    CartItem.find_by(listing_id: listing_id, user_id: current_user.id)
  end

  def update_cart_item(listing_id, quantity, in_cart)
    @cart_item = cart_find(listing_id)

    if @cart_item && !in_cart
      @cart_item[:quantity] = @cart_item[:quantity].to_i + quantity.to_i
    elsif @cart_item && in_cart
      @cart_item[:quantity] = quantity.to_i
    else
      @cart_item = CartItem.new(listing_id: listing_id, quantity: quantity)
      @cart_item.user_id = current_user.id
    end

    @cart_item.save
  end
end
