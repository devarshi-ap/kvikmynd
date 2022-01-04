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
- Movies by id (`GET /v1/movies/:id`)
- Movies by rating-name (`GET /v1/movies/:rating_name`)

<br>

### Categories:
- Top rated movies (`GET /v1/movies/category/top_rated`)
- Upcoming movies (`GET /v1/movies/category/upcoming`)
- Now playing movies (`GET /v1/movies/category/now_playing`)

<br>

### Querying
- 
