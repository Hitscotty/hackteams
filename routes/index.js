var express = require('express');
var request = require('request');
var mysql = require('mysql');

var router = express.Router();
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
        var hackathons = new Array();
	connection.connect();
	connection.query("SELECT * FROM hackathon", function(err, rows, fields) {
	    if (err) throw err;
		for (var i in rows) {
	// do something
	hackathons[i] = rows[i];

		}
	});
	connection.end();
	return hackathons;
}

const hacklist = getHackathonList();


/* GET home page. */
router.get('/', function(req, res, next) {

  res.render('index', { title: 'AWS Demo', bdy: 'body' });
});

module.exports = router;
