var mysql = require('mysql');
var request = require("request");
var cheerio = require("cheerio");
var  url = "https://mlh.io/seasons/na-2017/events";

request(url, function (error, response, body) {
    if (!error) {
	const $ = cheerio.load(body);
	//  var hackathons = $(".event-wrapper h3[itemprop=name]");
	//    hackathons.map(x => console.log(hackathons[x].children[0].data));
	//hackathons.map(x => console.log(x.innerHTML));

	var hackathons = $(".event-wrapper h3[itemprop=name]");
	var startDate = $(".event-wrapper meta[itemprop=startDate]");
	var endDate = $(".event-wrapper meta[itemprop=endDate]");
	var addressLocal = $(".event-wrapper span[itemprop=addressLocality]");
	var addressRegion = $(".event-wrapper span[itemprop=addressRegion]");
	var webUrl = $(".event-wrapper a");
	var logoUrl = $(".event-wrapper img");

	/* DATABASE INSERT */
	// override these with the current user using the website
	const host = 'hackteams.calc7kz37eri.us-east-1.rds.amazonaws.com';
	const username = 'scotty';
	const password = '88344e0e';
	const database = 'hackteams';

	var connection = mysql.createConnection(
	    {
		host     : host,
		user     : username,
		password : password,
		database : database
	    }
	);

	for(var i = 0; i < hackathons.length; i++){
	    var hackathon = {
		hackathon_name: hackathons[i].children[0].data,
		date_start: startDate[i].attribs.content,
		date_end: endDate[i].attribs.content,
		address_local: addressLocal[i].children[0].data ,
		address_region: addressRegion[i].children[0].data,
		hack_url: webUrl[i].attribs.href,
		img_url: logoUrl[i].attribs.src
	    }

	    connection.query('INSERT INTO hackathon SET ? ON DUPLICATE KEY UPDATE ?', [hackathon, hackathon] , function(err, res) {
		if (err) throw err;
		console.log('Last insert ID:', res.insertId);
	    });
	}
    }	    else {
	console.log("We’ve encountered an error: " + error);
    }

});
