```json
{
  currentUser: {
    id: 1,
    username: "app-academy"
  },
  forms: {
    signUp: {errors: []},
    logIn: {errors: []},
    createNote: {errors: ["body can't be blank"]}
  },
  allListings: {
    1: {
      id: 1,
      title: "Sample Listing",
      body: "is useful to plan",
      author_id: 1,
    },
    2: {
      id: 2,
      title: "Lots of Listings",
      body: "Yay",
      author_id: 2,
    }
  },
  currentListing: {
    id: 2,
    title: "Lots of Listings",
    body: "Yay",
    author_id: 2,
  },
  cart: [
    {
      product_id: 21,
      quantity: 5
    },
    {
      product_id: 2,
      quantity: 1
    }
  ]
  searchFilter: "some string",
  reviews: {
    1: {
      id: 1,
      listingId: 2,
      title: "Sample Review",
      body: "Loved it!",
      rating: 5
    }
  }
}
```
