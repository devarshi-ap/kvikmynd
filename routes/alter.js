/**
 * Define mountable route handlers (subrouting) for abstraction
 *
 */

const Movie = require('../models/movie');
const express = require('express');
const app = express();

app
  // ALL Updates and Creation return a resource representation

  // route for uploading movie to database
  .post('/alter/upload', (req, res) => {
    Movie.create(req.body);
    res.send({ type: 'POST', received: req.body });
  })

  // route for updating many movies' info on database
  .put('/alter/update', (req, res) => {
    // updates fields from req.body
    Movie.updateMany(req.query || {}, req.body, (err, movies) => {
      if (err) res.send({ msg: 'no movie matches the provided query' });

      Movie.find(req.query || {}, (err, movie) => {
        res.send({ type: 'PUT', updated: movie });
      });
    });
  })

  // route for updating a single movie's info on database
  .put('/alter/updateById/:id', (req, res) => {
    // updates fields from req.body
    Movie.findByIdAndUpdate({ _id: req.params.id }, req.body, (err, movie) => {
      if (err) res.send({ msg: `no movie found with id=${req.params.id}` });

      // send back updated document
      Movie.findById({ _id: req.params.id }, (err, movie_t) => {
        res.send({ type: 'PUT', updated: movie_t });
      });
    });
  })

  // route for deleting a movie from database by id
  .delete('/alter/removeById/:id', (req, res) => {
    Movie.findByIdAndDelete({ _id: req.params.id }, (err, movie) => {
      res.send({ type: 'DELETE', removed: movie });
    });
  });

// ADD ROUTE: for deleting query-matched movies from database (CAREFUL bruh)

// export this sub route
module.exports = app;
