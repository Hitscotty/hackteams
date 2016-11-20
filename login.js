var mysql = require('mysql');

var connection = mysql.createConnection(
    {
      host     : 'hackteams.c6p7kpyzcymg.us-east-1.rds.amazonaws.com',
      user     : 'test',
      password : 'password',
      database : 'hackteams'
    }
);

function attemptLogin(username, pw, callback) {
	connection.connect();
	connection.query("SELECT pass FROM users WHERE username = '" + username + "'", function(err, rows, field) {
		if (err) callback(err, null);
		if (rows[0].pass === pw) {
			callback(null, true);
		} else {
			callback(null, false);
		}
	});
	connection.end();
}
function processResult(err, result) {
	if (result) {
		// do something based on successful login
		console.log("Successful login.");
	} else {
		// unsuccessful
		console.log("Unsuccessful login.");
	}
}

attemptLogin('tiger', 'thefatcat', processResult);