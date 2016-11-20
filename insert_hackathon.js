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

var hackathon = {
	hackathon_name: 'def hacks()',
	date_start: '2016-11-19',
	date_end: '2016-11-20',
	address_local: 'Bronx',
	address_region: 'NY',
	hack_url: 'http://defhacks.io',
	img_urL: 'http://defhacks.io/img/defhacks-logos/defhacks-wordmark-logo-white-green-ny.png'
}

connection.connect();
connection.query('INSERT INTO hackathon SET ?', hackathon, function(err, res) {
	if (err) throw err;
	console.log('Last insert ID:', res.insertId);
});
connection.end();