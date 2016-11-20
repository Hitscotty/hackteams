var express = require('express');
var router = express.Router();
var request = require('request');

/* GET home page. */
router.get('/', function(req, res, next) {
  var options = {
    "method": "GET",
    "hostname": "mlh.io",
    "port": null,
    "path": "/seasons/na-2017/events",
    "headers": {
      "cache-control": "no-cache",
      "postman-token": "42e03d13-9d8e-6e72-650b-863cabbe4c2e"
    }
  };

  var req = http.request(options, function (res) {
    var chunks = [];

    res.on("data", function (chunk) {
      chunks.push(chunk);
    });

    res.on("end", function () {
      var body = Buffer.concat(chunks);
      console.log(body.toString());
    });
  });

  req.end();
  res.render('index', { title: 'AWS Demo', body: 'body' });
});

module.exports = router;
