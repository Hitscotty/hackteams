var mysql = require('mysql');
var hackathons = [];
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

function getHackathonList() {
	connection.connect();
	connection.query("SELECT * FROM hackathon", function(err, rows, fields) {
	    if (err) throw err;
	/*	for (var i = 0; i < rows.length; i++) {
			// do something
		//	console.log(rows[i]);
			hackathons[i] =  rows[i];
	console.log(hackathons);
		}*/
	    hackathons = rows;
	});
	connection.end();
	return hackathons;
}
const hacklist = getHackathonList();
console.log(hacklist);
console.log("the hack list is: " + hacklist[0]);


 
