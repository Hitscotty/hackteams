
/* Highlights the sidebars current page */

$(function() {

     var url = window.location.pathname;

     $('#fp-nav li a').each(function(){
          var myHref= $(this).attr('href');
          if( url == myHref) {
               $(this).addClass('active');
          }
     });

});


/* gets feeed data */

$(function() {
     $(".dark").click(function() {
          $("#feed").addClass('dark');
     });
     $(".light").click(function() {
          $("#feed").removeClass('dark');
     });
     var url = 'http://codepen.io/jobs/feed';
     $.ajax({
          type: "GET",
          url: document.location.protocol + '//ajax.googleapis.com/ajax/services/feed/load?v=1.0&num=1000&callback=?&q=' + encodeURIComponent(url),
          dataType: 'json',
          error: function() {
               $("#feed").after("<center>Unable to load feed, Incorrect path or invalid feed</center>");
          },
          success: function(xml) {
               values = xml.responseData.feed.entries;

               for (var i = 0, j = values.length; i < j; i++) {
                    // console.log(values[i]);

                    $("#feed").append("<li><a href='" + values[i].link + "' target='_blank'>" + values[i].title + "</a><br><i>" + values[i].contentSnippet + "</i><a href='" + values[i].link + "' class='apply'  target='_blank'> join </a><div>" + values[i].content + "</div></li>");
               }
          }
     });
});
