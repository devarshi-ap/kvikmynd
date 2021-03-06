// load environment variables from .env file
require('dotenv').config();

// import modules
const express = require('express');
const mongoose = require('mongoose');
const morgan = require('morgan');
const PORT = 3000;

// connect mongoose to mongodb cluster
mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true });

// set up express app
const app = express();

// middleware
app.use(morgan('dev'));
app.use(express.urlencoded({ extended: true })) // Parse URL-encoded bodies
app.use(express.json()); // body-parser deprecated

// serve api documenter static files
app.use(express.static('public'))

// mount sub-routes
app.use('/v1/movies', require('./routes/query'))
app.use('/v1/movies', require('./routes/category'))
app.use('/v1/movies', require('./routes/alter'))


// listen for requests
app.listen(PORT, function () {
  console.log(`listening on http://localhost:${PORT}`);
});
