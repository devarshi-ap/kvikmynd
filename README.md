# MCU-REST-API
A pragmatic restful api built with widely adopted standards &amp; practices for a Marvel movies-DB data model.

<br>

## TechStack & Dependencies:
* _[ `Node.js`, `Express.js`, `Mongoose`, `MongoDB` ]_
* _[ `Insomnia` testing, `Swagger` docs ]_
* <h6 style="text-decoration: line-through">Spotify music for sanity</h6>

<br>

## API Endpoints:

<br>

### Root Route: (`/v1/movies`)

<br>

### Query:
- All movies (`GET /query`)
- Query String (`GET /query?<query string>`)

<br>

### Query by Categories:
- Movies tags (`GET /category/<tag name>`)
- Movies tags + Query String (`GET /category/<tag name>?<query string>`)

<br>

### Altering Database:
- Upload movie (`POST /alter/upload`)
    * {JSON sent to server must pass Schema Validation (see models/movie.js)}
- Update movie by query string (`PUT /alter/upload/<query string>`)
    * {update fields in JSON sent to server}
- Update movie by id (`PUT /alter/upload/<id>`)
    * {update fields in JSON sent to server}
- Delete movie by id (`DELETE /alter/removeById/<id>`)

