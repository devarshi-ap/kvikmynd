## Quick Links
( project links )

<br>

## Project Description

### What does Kvikmynd mean?

_Kvikmynd_ is Icelandic 🇮🇸 for 'movies'. exotic amiright. Kvikmynd a pragmatic RESTful movie-catalog API built with widely adopted standards &amp; practices.


### Technologies & Tools 🛠:
- [`Node`](https://nodejs.dev)
- [`Express`](https://expressjs.com)
- [`MongoDB`](https://www.mongodb.com) ([`Mongoose`](https://mongoosejs.com) ODM)
- **and made with ❤️**

#### API:
  * /testing with [`Insomnia`](https://insomnia.rest)
  * /documentation generation with [`Insomnia-documenter`](https://www.npmjs.com/package/insomnia-documenter)
  * Modularized routes
  * RESTful semantic, pluralized URLs
  * API versioning embedded into URLs (ensures browser explorability of the resources across future versions)
  * Result (movie JSONs) filtering, sorting & searching
  * All resource-altering requests return a resource rep. (prevents an API consumer from having to hit API again for updated rep.)
  * JSON only responses
<br>


## API Endpoints:

##### Root Route: (`/v1/movies`)

| HTTP Request      | Endpoints |
| ----------- | ----------- |
| _GET_      | `/query` <br> `/query?<query string>` <br> `/category/:tag` <br> `/category/:tag?<query string>` <br> `/query/sort/:order/:numerical_field` |
| _POST_   | `/alter/upload` |
| _PUT_   | `/alter/update?<query string>` <br> `/alter/updateById/:id` |
| _DELETE_   | `/alter/removeById/:id` |


<br>

<pre>
TO-DO:
1. Implement Rate Limiting to prevent API abuse
2. Implement API Authentication (JWT, 0Auth, etc..)
</pre>
