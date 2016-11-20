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
    var startDate = $(".event-wrapper meta[itemprop=startDate]")[0];
    var endDate = $(".event-wrapper meta[itemprop=endDate]")[0];
    var addressLocal = $(".event-wrapper span[itemprop=addressLocality]")[0];
    var addressRegion = $(".event-wrapper span[itemprop=addressRegion]")[0]
    var webUrl = $(".event-wrapper a");
    var logoUrl = $(".event-wrapper img");

    for(var i = 0; i < hackathons.length; i++){
      

    }
    var name = hackathons[0].children[0].data;
    console.log(name);
   // console.log(startDate.attribs.content);
   // console.log(endDate.attribs.content);
   // console.log(addressLocal.children[0].data);
   // console.log(addressRegion.children[0].data);
   // console.log(webUrl[0].attribs.href);
   // console.log(logoUrl[0].attribs.src);
  } else {
    console.log("We’ve encountered an error: " + error);
  }
});
