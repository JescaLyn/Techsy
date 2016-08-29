# Schema Information

## users
column name     | data type | details
----------------|-----------|-----------------------
id              | integer   | not null, primary key
username        | string    | not null, indexed, unique
email           | string    | not null, indexed, unique
password_digest | string    | not null
session_token   | string    | not null, indexed, unique

## listings
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
title       | string    | not null
vendor_id   | integer   | not null, foreign key (references users), indexed
description | text      | not null
overview    | text      | not null
image_url   | string    | not null
price       | float     | not null

## reviews
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
author_id   | integer   | not null, foreign key (references users), indexed
listing_id  | integer   | not null, foreign key, indexed
title       | string    | not null
body        | text      |
rating      | integer   | not null

## carts
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
user_id     | integer   | not null, foreign key, indexed

## carts_listings
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
listing_id  | integer   | not null, foreign key, indexed
cart_id     | integer   | not null, foreign key, indexed
quantity    | integer   | default: 1
