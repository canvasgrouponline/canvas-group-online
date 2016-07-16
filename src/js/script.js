jQuery( document ).ready(function() {
  // Global Variables
  var width = jQuery(window).width();
  var height = jQuery(window).height();

  // dynamic header size
  var isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(navigator.userAgent) ? true : false;

  if(!isMobile) {
    jQuery('.big-banner').css({'height': height + -68 + "px"});
  }

  jQuery(".current-menu-item").addClass("active");
});

// jQuery powered scroll to top
jQuery(document).ready(function() {
  jQuery(window).scroll(function() {
    if(jQuery(this).scrollTop()>100) {
      jQuery(".scroll-to-top").fadeIn(600,"linear");
    } else {
      jQuery(".scroll-to-top").fadeOut(600,"linear");
    }
  });
  jQuery(".scroll-to-top").click(function() {
    jQuery("html, body").animate({scrollTop:0},800);
    return false;
  });
});
