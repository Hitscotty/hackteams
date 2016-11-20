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

function getDataList(table) {
	connection.connect();
	connection.query("SELECT * FROM " + table, function(err, rows, fields) {
	    if (err) throw err;
		for (var i in rows) {
			// do something
			console.log('Title: ', rows[i]);
		}
	});
	connection.end();
}

getDataList('users');


 
