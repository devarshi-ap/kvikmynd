# MCU-REST-API
A pragmatic restful api built with widely adopted standards &amp; practices for a Marvel movies-DB data model.

<br>

## TechStack & Dependencies:
* _[ `Node.js`, `Express.js`, `Mongoose`, `MongoDB` ]_
* _[ `Insomnia` testing, `Swagger` docs ]_
* <h6 style="text-decoration: line-through">Spotify music for sanity</h6>

<br>

## Core Resources:

<br>

### Movies:
- All movies (`GET /v1/movies`)

<br>

### Categories:
- Top rated movies (`GET /v1/movies/category/top_rated`)
- Upcoming movies (`GET /v1/movies/category/upcoming`)
- Now playing movies (`GET /v1/movies/category/now_playing`)

<br>

### Querying:
- Movies by id/title/phase/IMDb_rating/release_year/rating_name/watched/budget/gross (query string)
- Sort movies by id/phase/IMDb_rating/release_year/budget/gross (all numbers) (`GET /v1/movies/:IMDb_rating?sorted=true`)

### Watchlist:
- Add movie to watchlist by name/id
