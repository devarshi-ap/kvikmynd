/**
 * The purpose of this script is to initially upload the aggregated & cleaned JSON movie-data to the mongodb collection the first time.
 */

const MongoClient = require('mongodb').MongoClient;
const fs = require('fs');

// connect mongoose to mongodb cluster (REMEMBER TO CHANGE <PASSWORD>)
const db_uri =
  'mongodb+srv://m001-student:m001-<password></password>@sandbox.2f5f6.mongodb.net/sandbox?retryWrites=true&w=majority';

MongoClient.connect(db_uri, function (err, db) {
  if (err) throw err;

  // create a database object
  const dbo = db.db('test1');
  console.log('Database created!');

  // create a 'players' collection (keep commented if collection already created)
  /*	dbo.createCollection('movies', (err, res) => {
				if (err) throw err;
    		console.log('Collection created!');
    	});
	*/

  fs.readFile(
    '/Users/dev/Documents/winter21/MCU-REST-API/dataset/mcu_movies.json',
    'utf8',
    (err, data) => {
      if (err) {
        console.error(err);
        return;
      }

      // upload mcu_movies.json content to 'movies' collection on MongoDB
      dbo
        .collection('movies')
        .insertMany(JSON.parse(data), function (err, result) {
          if (err) throw err;
          console.log('Documents inserted');
          db.close();
        });
    }
  );
});
