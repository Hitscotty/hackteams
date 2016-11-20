var mysql = require('mysql');

// override these with the current user using the website
var username = 'kevin';
var password = '12345';

var connection = mysql.createConnection(
    {
      host     : 'hackteams.c6p7kpyzcymg.us-east-1.rds.amazonaws.com',
      user     : username,
      password : password,
      database : 'hackteams'
    }
);

var user_id = 1;
var skill_name = "Python";
var experience = "1 Year";

connection.connect();

var query_str = "INSERT INTO user_skill (user_id, skill_name, experience) VALUES (" + user_id.toString() + ", '" + skill_name + "', '" + experience + "')";
console.log(query_str);
connection.query(query_str, function(err, res) {
	if (err) throw err;
	console.log('Last insert ID:', res.insertId);
});

connection.end();