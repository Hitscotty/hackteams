const request = require("request");
const cheerio = require("cheerio");
const  url = "https://mlh.io/seasons/na-2017/events";

request(url, function (error, response, body) {
  if (!error) {
    const $ = cheerio.load(body);
    //  var hackathons = $(".event-wrapper h3[itemprop=name]");
    //    hackathons.map(x => console.log(hackathons[x].children[0].data));
    //hackathons.map(x => console.log(x.innerHTML));

    var hackathons = $(".event-wrapper");
    var startDate = $(".event-wrapper meta[itemprop=startDate]");
    var endDate = $(".event-wrapper meta[itemprop=endDate]");
    var addressLocal = $(".event-wrapper span[itemprop=addressLocality]");
    var addressRegion = $(".event-wrapper span[itemprop=addressRegion]");
    var webUrl = $(".event-wrapper a");
    var logoUrl = $(".event-wrapper img");


    hackathons.each(function(i, element){
      var hackathon_name = $(this).find("h3").text();
      var date_start = $(this).find("meta[itemprop=startDate]").attr('content');
      var date_end = $(this).find("meta[itemprop=endDate]").attr('content');
      var address_local = $(this).find("span[itemprop=addressLocality]").text();
      var address_region = $(this).find("span[itemprop=addressRegion]").text();
      var hack_url = $(this).find("a").attr("href");
      var img_url = $(this).find("img").attr("src");

      console.log("#" + "\n");
      console.log(hackathon_name);
      console.log(date_start);
      console.log(date_end);
      console.log(address_local);
      console.log(address_region);
      console.log(hack_url);
      console.log(img_url);
    });

  } else {
    console.log("We’ve encountered an error: " + error);
  }
} );
