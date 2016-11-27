var mysql = require('mysql');

// override these with the current user using the website
var username = 'scotty';
var password = '88344e0e';

var connection = mysql.createConnection(
    {
      host     : 'hackteams.calc7kz37eri.us-east-1.rds.amazonaws.com',
      user     : username,
      password : password,
      database : 'hackteams'
    }
);

function getHackathonList() {
	connection.connect();
	connection.query("SELECT * FROM hackathon", function(err, rows, fields) {
	    if (err) throw err;
		for (var i in rows) {
			// do something
			console.log('Title: ', rows[i]);
		}
	});
	connection.end();
}

getHackathonList();
