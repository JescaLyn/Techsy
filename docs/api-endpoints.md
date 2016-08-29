# API Endpoints

## HTML API

### Root

- `GET /` - loads React web app

## JSON API

### Users

- `POST /api/users`
- `GET /api/users/:id`

### Session

- `POST /api/session`
- `DELETE /api/session`
- `GET /api/session`

### Listings

- `GET /api/listings`
  - Listings index/search
  - accepts pagination params (if I get there)
- `POST /api/listings`
- `GET /api/listings/:id`
- `PATCH /api/listings/:id`
- `DELETE /api/listings/:id`

### Cart

- `GET /api/cart`
- `PATCH /api/cart`

### Reviews

- `GET /api/reviews`
- `POST /api/reviews`
- `DELETE /api/reviews`
