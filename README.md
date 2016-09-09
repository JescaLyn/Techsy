# Techsy

[Techsy live][heroku]

[heroku]: http://www.techsy.store

Techsy is a full-stack web application inspired by Etsy.  It utilizes Ruby on Rails on the backend, a PostgreSQL database, and React.js with a Redux architectural framework on the frontend.  

## Features & Implementation

### Single-Page App

Techsy is a single-page; all content is delivered on one static page. Each React component has a container (or a parent with a container), which delivers the appropriate state information to the component so that it renders . The Store part of the Redux structure holds the current state divided into `cart`, `listing`, `listings`, `modals`, `search`, `session`, and `shop`.

### Session and Modal

Techsy has a full authentication system that keeps sensitive information, such as the user's password, protected. The `User` model validates the password length before encrypting the password with BCrypt and storing the result in the database. Each user is also initialized with a session token. This session token is reset when the user logs in or logs out, and the session cookie is updated to reflect the session token of the current user. The rest of application can access this current user via the `current_user` helper method.

```Ruby
class User < ActiveRecord::Base
  attr_reader :password

  validates :username, :password_digest, :session_token, :email, presence: true
  validates :username, :session_token, :email, uniqueness: true
  validates :password, length: { minimum: 6, allow_nil: true }

  after_initialize :ensure_session_token

  def self.find_by_credentials(username, password)
    user = User.find_by(username: username)
    return nil unless user && user.is_password?(password)
    user
  end

  def password=(password)
    @password = password
    self.password_digest = BCrypt::Password.create(password)
  end

  def is_password?(password)
    pw_digest = BCrypt::Password.new(self.password_digest)
    pw_digest.is_password?(password)
  end
end

On the frontend, the user can register or login via a Session Modal for a professional look.

![image of session modal](docs/wireframes/modal-screenshot.png)

```

### Listings and Search

Listings are stored in one table in the database that keeps track of `shop_id`, `title`, `subtitle`, `description`, `image_url`, `price`, and `quantity`. When the current user visits a page with many listings, the frontend API uses an AJAX call to fetch the appropriate set of listings. This call sends a filter so that only relevant listings are returned. If the user is visiting a shop, for instance, the `ListingsController` makes a call to the database for listings with the appropriate `shop_id` and renders these. The frontend updates the `listings` part of the state in the `ListingsReducer`. If the user visits a Listing Detail page, the `listing` information instead hits the `ListingReducer`, which updates the singular `listing` part of the state.

If the user enters a search query in the `SearchBar` and clicks "Search", the backend will filter only those listings whose `title`, `subtitle`, and `description` include each of the words in the search query. In the backend, the search query is split into individual words to query the database properly.

Listings are rendered in either the `ListingIndex` or `ListingDetail` component. The `ListingIndex` component renders all listings in the `listings` part of the frontend state in a grid. The UI is inspired by several different sites. Each `ListingIndexItem` shows the listing image, title, shop name, and price. The user may also mouseover the listing to see the listing subtitle.

The `ListingDetail` component renders a page that shows all of the listing's details, including a tab box that can be toggled between the listing's `description` and its `reviews`. The user may select a quantity and click "Add to cart" to create a `CartItem` with the desired `quantity` and go to their cart. This quantity is capped at the listing's `quantity` value, which is the maximum number of the item that the shop owner is willing to sell. If the listing is one of the user's shop listings, the "Add to cart" button is replaced by an "Edit Listing" button that sends the user to the `ListingEditForm` component to edit the listing. There is also a mini `ListingIndex` in the bottom right corner with four of the shop's other listings and links to the shop for easy browsing.

### Cart

In the backend, the "cart" is just a join table called `cart_items` that joins the `users` and `listings` tables. Each `CartItem` has a `user_id`, `listing_id`, and `quantity`. The `quantity` represents the number of that item in the user's cart, not to be confused with the listing's `quantity`, which is the max number of that item that the shop owner is willing to sell.

The frontend `cart` state is different from the backend. A user may add items to their cart before logging in, which updates the frontend `cart` but does not interact with the backend. When a user logs in after adding items to the cart, the `CartMiddleware` merges the frontend cart with the user's cart and replaces the frontend `cart` state with the user's updated cart. This is done in the `CartItemsController`, as shown below. The `CartItemsController` also allows the user to update the quantity of a listing in their cart by checking `params[:in_cart]`. If the user sends the update request from the `Cart` component, then the `CartItemsController` replaces the quantity in the current `CartItem`. However, if this request comes from any other component, such as `ListingDetail`, the incoming `quantity` is added to the existing quantity. So if a user has a Teddy Bear in their cart, they may add more Teddy Bears from the Teddy Bear listing page, or they can just adjust the quantity directly on the `Cart` component.

```ruby
class Api::CartItemsController < ApplicationController
  def update_cart
    cart = params[:cart] || {}
    cart.keys.each do |key|
      item = cart[key]
      update_cart_item(item[:listing_id], item[:quantity])
    end

    @cart_items = current_user.cart_items
    render :index
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
```

When the user clicks "Checkout" on the `Cart` component, the frontend `cart` is cleared, and the user's backend `CartItems` are deleted if the user is logged in.

### Shop

When a user clicks "Sell On Techsy" in the `Header` component, they are redirected to a `SellSplash` component. This component prompts the user to open a shop. If the user clicks "Open your shop" while logged out, the `SessionModal` component will open, prompting the user to register or login. If they login, they will be redirected to the `ShopForm` component to create a shop. If they already have a shop, they will be redirected to their `Shop` component.

The `ShopForm` component will send a request to the database with all the information needed to create a new shop row in the `shops` table. Each `shop` has a `name`, `description`, `country`, `currency`, `kind`, `image_url`, and `user_id`. The user_id is assigned to the id of the backend `current_user`. If the `createShop` action fails, errors at the top of the form will prompt the user to fix their shop details. Once a user has a shop, they can visit their shop page from "Your Shop" in the `Header`. In their shop, they can click "Create a Listing" to go to the `ListingForm` component.

## Future Directions for the Project

In addition to the features already implemented, I plan to continue work on this project.  The next steps for Techsy are outlined below.

### Search Dropdown

I would like to implement a search dropdown that attempts to autofill the `SearchBar` as the user types with the most common words from listings' titles, subtitles, and descriptions. The backend for this is already implemented, and the frontend `search` state has a list of `searchTerms`. These search terms are filtered, removing some of the most common words in the English language, and sorted, from least frequent to most frequent. This sorting will allow me to design the dropdown so that more popular words appear higher in the dropdown.

### Categories

I would like to implement Categories that the products can be organized into. Ideally, there will be a banner beneath the Header that suggests categories for the user to choose from, and those pages will only show the listings relevant to that category.
