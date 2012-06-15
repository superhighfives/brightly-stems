/* Author: Charlie Gleason

*/

(function($) {

  var Parallax = {
    initialize: function() {
      $(window).bind("scroll", Parallax.scrolling);
      Parallax.scrolling();
    },
    scrolling: function() {
      var fold = $(window).scrollTop();
      var speed = fold * 0.25;
      $(".arrows").css({top: 0 + speed});
    }
  };

  Parallax.initialize();

})(jQuery);