/**
 * Creating Schema Validations for each movie document in the 'movies' collection
 */

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const movieSchema = new Schema({
  title: {
    type: String,
    required: true,
  },

  // _id not necessarily required since MongoDB Atlas autogenerates ObjectId() for document if not specified
  _id: Number,

  // 5 phases announced in MCU
  phase: {
    type: Number,
    min: 1,
    max: 5,
    required: true,
  },

  // IMDb scale 0-10, with -1 indicating not yet rated
  IMDb_rating: {
    type: Number,
    min: -1,
    max: 10,
    required: true,
  },

  release_date: String,
  
  release_year: Number,

  running_time: Number,
  
  // ratings per Motion Picture Assc. (MPA Canada)
  rating_name: {
    type: String,
    enum: ['G', 'PG', 'PG-13', '14A', '18A', 'R', 'tbd'],
  },
  
  watched: {
    type: Boolean,
    required: true,
  },
  
  budget: Number,
  
  gross: Number,
  
  misc_tags: [{ type: String }],
});

// compile model from above schema
const Movie = mongoose.model('movie', movieSchema)

// export the model
module.exports = Movie
