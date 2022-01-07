/**
 * Define mountable route handlers (subrouting) for abstraction
 *
 * Viable query fields:
 * 	- title, _id, phase, IMDb_rating, release_date, release_year, running_time, rating_name, watched, budget, gross, misc_tags
 */

const Movie = require('../models/movie');
const express = require('express');
const app = express();

// Middleware for communicating to database ...

app
  // ie. GET /api/movies?phase=1&release_year=2011 : GET all phase 1 movies released in 2011
  // no query string (no query) returns all documents
  .get('/query', (req, res) => {
    Movie.find(req.query || {}, (err, movies) => {
      res.send(movies);
    });
  })

  // ADD ROUTE: for GETing movies sorted by a numerical field (phase, IMDb_rating, release_year, running_time, budget, gross)
  .get('/sort/:order/:numerical_field', (req, res) => {
    const acceptable_fields = [
      'phase',
      'IMDb_rating',
      'release_year',
      'running_time',
      'budget',
      'gross',
    ];
    const acceptable_orders = ['asc', 'desc'];

    const num_field = req.params.numerical_field;
    const order_field = req.params.order;

    if (
      acceptable_fields.includes(num_field) &&
      acceptable_orders.includes(order_field)
    ) {
      // null is unreachable code
      var order_query =
        req.params.order == 'asc'
          ? `${num_field}`
          : req.params.order == 'desc'
          ? `-${num_field}`
          : null;

      Movie.find({})
        .sort(`${order_query}`)
        .exec(function (err, movies) {
          res.send(movies);
        });
    } else {
      res.send({
        message: `movies couldn't be sorted by ${req.params.numerical_field}!`,
        'acceptable fields': acceptable_fields,
        'acceptable orders': acceptable_orders,
      });
    }
  });

// export this sub route
module.exports = app;
