/**
 * Define mountable route handlers (subrouting) for abstraction
 *
 */

const Movie = require('../models/movie');
const express = require('express');
const app = express();

app

  // route for uploading movie to database
  .post('/upload', (req, res) => {
    Movie.create(req.body);
    res.send({ type: 'POST', received: req.body });
  })

  // route for updating a single movie's info on database
  .put('/update/:id', (req, res) => {
    // updates fields from req.body
    Movie.findByIdAndUpdate({ _id: req.params.id }, req.body, (err, movie) => {
      if (err) res.send({ msg: `no movie found with id=${req.params.id}` });

      // send back updated document
      Movie.findById({ _id: req.params.id }, (err, movie_t) => {
        res.send({ type: 'PUT', received: movie_t });
      });
    });
  })

  // route for updating many movies' info on database
  .put('/update', (req, res) => {
    // updates fields from req.body
    Movie.updateMany(req.query || {}, req.body, (err, movies) => {
      if (err) res.send({ msg: 'no movie matches the provided query' });

      Movie.find(req.query || {}, (err, movie) => {
        res.send({ type: 'PUT', updated: movie });
      });
    });
  })

  // route for deleting a movie from database by id
  .delete('/removeById/:id', (req, res) => {
    Movie.findByIdAndDelete({ _id : req.params.id}, (err, movie) => {
        res.send({ type: 'DELETE', removed: movie});
    })
  });

  // ADD ROUTE: for deleting query-matched movies from database (CAREFUL bruh)

// export this sub route
module.exports = app;
