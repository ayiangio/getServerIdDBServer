require('dotenv').config()
var mysql = require('mysql');
var pool  = mysql.createPool({
	host: process.env.DB_HOST,
	user:process.env.DB_USER,
	password: process.env.DB_PASSWORD,
	database: process.env.DB_NAME 
});
 
pool.query('SELECT @@hostname hostname', function (error, results) {
  if (error) throw error;
  console.log(results);
});