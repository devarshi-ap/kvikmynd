# MCU-REST-API
A pragmatic restful api built with widely adopted standards &amp; practices for a Marvel movies-DB data model.

<br>

---

## TechStack & Dependencies:
_[ `Node.js`, `Express.js`, `Mongoose`, `MongoDB` ]_

_[ `Insomnia` testing, `Swagger` docs ]_

**and made with ❤️**

<br>

---

## API Endpoints:

##### Root Route: (`/v1/movies`)

| HTTP Request      | Endpoints |
| ----------- | ----------- |
| _GET_      | `/query` <br> `/query?<query string>` <br> `/category/<tag name>` <br> `/category/<tag name>?<query string>` |
| _POST_   | `/alter/upload` |
| _PUT_   | `/alter/upload/<query string>` <br> `/alter/upload/<id>` |
| _DELETE_   | `/alter/removeById/<id>` |


<br>

### Querying:
- All movies [`GET /query`]
- Query String [`GET /query?<query string>`]
- Sort all movies by Number-type fields (see Schema) [`GET /sort/<order>/<numerical_field>`]

<br>

### Query by Categories:
- Movies tags [`GET /category/<tag name>`]
- tags + query string [`GET /category/<tag name>?<query string>`]

<br>

### Altering Database:

- Upload movie [`POST /alter/upload`]
- Update movie by query string [`PUT /alter/upload/<query string>`]
- Update movie by id [`PUT /alter/upload/<id>`]
- Delete movie by id [`DELETE /alter/removeById/<id>`]

<br>

<pre>
note:
1. JSON sent in PUT requests contain fields to update)
2. JSON sent in POST request must pass Schema Validation (see models/movie.js)
</pre>

<br>

TO-DO:
1. Implement Rate Limiting to prevent API abuse
2. Come up wiht more endpoints
3. Implement API Authentication (JWT, 0Auth, etc..)