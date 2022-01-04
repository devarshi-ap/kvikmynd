# MCU-REST-API
A pragmatic restful api built with widely adopted standards &amp; practices for a Marvel movies-DB data model.

<br>

## Core Resources:
----

<br>

### Core Resources:
- All movies (`GET /v1/movies`)
- Movies by id (`GET /v1/movies/:id`)

<br>

### Categories:
- Top rated movies (`GET /v1/movies/category/top_rated`)
- Upcoming movies (`GET /v1/movies/category/upcoming`)
- Now playing movies (`GET /v1/movies/category/now_playing`)

<br>

### Querying
- Year (`GET /v1/movies?year=2022`)
- Genre (`GET /v1/movies?genre`)
    * action, comedy, animated, etc..
- Title
- Director
- Rating
- ID
