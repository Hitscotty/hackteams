var Nightmare = require('nightmare');
var nightmare = Nightmare({ show: true });

var selector = 'div.event:nth-child(89) > div:nth-child(1) > a:nth-child(1) > div:nth-child(1) > h3:nth-child(3)';

nightmare
  .goto('https://mlh.io/seasons/na-2017/events')
  .evaluate(function (selector) {
    // now we're executing inside the browser scope. 
    return document.querySelector(selector).innerText;
  }, selector) // <-- that's how you pass parameters from Node scope to browser scope 
  .end()
  .then(function(text) {
    console.log(text);
  });
