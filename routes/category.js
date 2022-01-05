/**
 * Define mountable route handlers (subrouting) for abstraction
 *
 */

const Movie = require('../models/movie');
const express = require('express');
const app = express();

app

  // route for top-rated movies
  .get('/category/:tag', (req, res) => {
    // merge query-string object to the top-rated MQL-query object
    const tagQuery = { misc_tags: { $all: [req.params.tag] } };
    const filter = req.query ? { ...req.query, ...tagQuery } : tagQuery;

    Movie.find(filter, (err, movies) => {
      res.send(movies || { msg: `no movies are ${req.params.tag}` });
    });
  });

// export this sub route
module.exports = app;
