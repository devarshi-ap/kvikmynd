/**
 * Define mountable route handlers (subrouting) for abstraction
 */

const Movie = require('../models/movie');
const express = require('express');
const app = express();

// Middleware for communicating to database...

app
	.get('/movies', function (req, res) {
		Movie.find({}, (err, movies) => {
			res.send(movies);
		})
	})
	
	.get('/movies/:id', function (req, res) {
  	Movie.find({ _id: req.params.id }, (err, movies) => {
    	res.send(movies);
  	});
	})

	.get('/movies/title/:title', function (req, res) {
  	Movie.find({ title : req.params.title }, (err, movies) => {
    	res.send(movies);
  	});
	});

// export this sub route
module.exports = app;
