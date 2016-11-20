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

var user = {
	username: 'kevin',
	first_name: 'Kevin',
	last_name: 'Lu',
	pass: 'pa$$w0rd',
	bio: null, // can be null
	country: 'United States',
	city: 'Boston',
	street: 'Massachusetts Avenue', // can be null
	state: 'MA', // can be null
	zip_code: '12345', // can be null
	email: 'cs.kevinlu@gmail.com', // can be null
	phone_no: '2158214323' // can be null
};

connection.connect();
connection.query('INSERT INTO users SET ?', user, function(err, res) {
	if (err) throw err;
	console.log('Last insert ID:', res.insertId);
});
connection.end();