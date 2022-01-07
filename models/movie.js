/**
 * Creating Schema Validations for each movie document in the 'movies' collection
 */

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const movieSchema = new Schema({
  title: {
    type: String,
    required: [true, 'A title is required'],
  },

  // _id not necessarily required since MongoDB Atlas autogenerates ObjectId() for document if not specified
  _id: Number,

  // 5 phases announced in MCU
  phase: {
    type: Number,
    min: 0,
    max: 5,
    required: [true, 'A MCU-Movie Phase is required'],
  },

  // IMDb scale 0-10, with -1 indicating not yet rated
  IMDb_rating: {
    type: Number,
    min: -1,
    max: 10,
    required: [true, 'An IMDb rating is required'],
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
    required: [true, "A Boolean value is required for the 'watched' field"],
  },

  budget: Number,

  gross: Number,

  misc_tags: [{ type: String }],
});

// hide a certain properties of Mongoose objects by filling in the below blanks
/*
movieSchema.methods.toJSON = function() {
    var obj = this.toObject();
    delete obj.<name of property you want hidden>;
    return obj;
}
*/

// compile model from above schema
const Movie = mongoose.model('movie', movieSchema);

// export the model
module.exports = Movie;
