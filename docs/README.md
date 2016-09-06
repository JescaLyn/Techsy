# Techsy

[Heroku link][heroku]
[heroku]: http://www.herokuapp.com

## Minimum Viable Product

Techsy is a web application inspired by Etsy built using Ruby on Rails and React/Redux. By the end of Week 9, this app will, at a minimum, satisfy the following criteria with smooth, bug-free navigation, adequate seed data and sufficient CSS styling:

- [ ] Hosting on Heroku
- [ ] New account creation, login, and guest/demo login
- [ ] Production README sample
- [ ] Product Listings
- [ ] Shopping Cart
- [ ] Comments / Reviews
- [ ] Search

  ## Design Docs
  * [View Wireframes][wireframes]
  * [React Components][components]
  * [API endpoints][api-endpoints]
  * [DB schema][schema]
  * [Redux Structure][redux-structure]
  * [Sample State][sample-state]

  [wireframes]: wireframes
  [components]: component-hierarchy.md
  [redux-structure]: redux-structure.md
  [sample-state]: sample-state.md
  [api-endpoints]: api-endpoints.md
  [schema]: schema.md

## Implementation Timeline

### Phase 1: Backend setup and Front End User Authentication (2 days)

**Objective:** Functioning rails project with front-end Authentication

- [X] New Rails project
- [X] User model/migration
- [X] Back end authentication (session/password)
- [X] StaticPages controller and root view
- [X] Webpack & react/redux modules
- [X] APIUtil to interact with the API
- [X] Redux cycle for frontend authentication
- [X] User signup/signin components
- [X] Blank landing component after signup/signin
- [X] Style signup/signin components
- [X] Seed users
- [X] Review phase 1

### Phase 2: Listing Model, API, and components (2 days)

**Objective:** Listings can be created, read, edited and destroyed through the API.

- [X] Listing model
- [X] Seed database with a small amount of test data
- [X] CRUD API for listings (ListingsController)
- [X] JBuilder views for listings
- [X] Listing components and respective Redux loops
- [X] ListingIndex
- [X] ListingIndexItem
- [X] ListingDetail
- [X] ListingForm
- [X] Style listings components
- [X] Seed listings

### Phase 3: Shopping Cart(2 day)

**Objective:** Shopping cart that can be viewed, edited and checked out through the API. Can add to shopping cart through listings

- [X] ShoppingCart model
- [X] Seed database with a small amount of test data
- [X] CRUD API for shopping cart (ShoppingCartController)
- [X] JBuilder views for shopping cart
- [X] Adding items to shopping cart
- [X] Removing items from shopping cart
- [ ] Checking out shopping cart
- [ ] Redux Components:
- [ ] ShoppingCart Index
- [ ] ShoppingCart Item
- [ ] Cart Checkout Component
- [ ] Style shopping cart components
- [X] Seed shopping cart items in guest account

### Phase 4: Comments / Reviews (2 days)

**Objective:** Listings can have multiple comments with review ratings, and reviews are sortable by rating.

- [ ] Review model and Review join table
- [ ] Fetching reviews for listing
- [ ] Reviews Component
- [ ] Sort by rating number
- [ ] Style comment & review components
- [ ] Seed reviews with seed data

### Phase 5: - Search for Listings (1 day)

**Objective:** Add a search bar to header that shows listings containing keywords.

- [ ] Fetching search results for search fragment
- [ ] Search Result component
- [ ] Style search components and transitions
- [ ] Ensure all relevant listings appear

### Bonus Features (TBD)
- [ ] Categories
- [ ] Discover section
- [ ] Selling on Techsy
- [ ] Favorites
- [ ] Order Model/ order history under profile
