
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
