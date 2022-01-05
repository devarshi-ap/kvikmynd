// import modules
const express = require('express');
const mongoose = require('mongoose');
const morgan = require('morgan');
const PORT = 3000;

// connect mongoose to mongodb cluster
const db_uri =
  'mongodb+srv://m001-student:m001-mongodb-basics@sandbox.2f5f6.mongodb.net/sandbox?retryWrites=true&w=majority';
mongoose.connect(db_uri, { useNewUrlParser: true, useUnifiedTopology: true });

// set up express app
const app = express();

// middleware
app.use(morgan('dev'));
app.use(express.urlencoded()); // Parse URL-encoded bodies
app.use(express.json()); // body-parser deprecated
app.use('/api', require('./routes/root')) // mount '/movies' on root route


// listen for requests
app.listen(PORT, function () {
  console.log(`listening on http://localhost:${PORT}`);
});
