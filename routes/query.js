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
	.get('/query', function (req, res) {
		Movie.find(req.query || {}, (err, movies) => {
			res.send(movies);
		});
	})


    // ADD ROUTE: for GETing movies sorted by a numerical field (phase, IMDb_rating, release_year, running_time, budget, gross)
    

// export this sub route
module.exports = app;
