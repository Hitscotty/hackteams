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

	// console.log(hackathons[0].children[0].data);
	// console.log(startDate.attribs.content);
	// console.log(endDate.attribs.content);
	// console.log(addressLocal.children[0].data);
	// console.log(addressRegion.children[0].data);
	// console.log(webUrl[0].attribs.href);
	// console.log(logoUrl[0].attribs.src);

	/* DATABASE INSERT */
	// override these with the current user using the website
	var username = 'kevin';
	var password = '12345';

	//console.log(hackathons[3].children[0].data);
	var connection = mysql.createConnection(
		{
		    host     : 'hackteams.c6p7kpyzcymg.us-east-1.rds.amazonaws.com',
		    user     : username,
		    password : password,
		    database : 'hackteams'
		}
		);

	for(var i = 0; i < hackathons.length; i++){
	    console.log(hackathons[i].children[0].data);
	    var hackathon = {
		hackathon_name: hackathons[i].children[0].data,
		date_start: startDate[i].attribs.content,
		date_end: endDate[i].attribs.content,
		address_local: addressLocal[i].children[0].data ,
		address_region: addressRegion[i].children[0].data,
		hack_url: webUrl[i].attribs.href,
		img_urL: logoUrl[i].attribs.src
	    }

	    connection.query('INSERT INTO hackathon SET ?', hackathon, function(err, res) {
		if (err) throw err;
		console.log('Last insert ID:', res.insertId);
	    });
	}
    } else {
	console.log("We’ve encountered an error: " + error);
    }


});
