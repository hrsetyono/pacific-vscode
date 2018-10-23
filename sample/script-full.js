// Google Analytics
(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
(i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
})(window,document,'script','//www.google-analytics.com/analytics.js','ga');

ga('create', 'UA-47169688-3', 'auto');
ga('send', 'pageview');

(function () {
  // Your app-specific script here
  var deviceWidth = $(window).width();

  /*--- GENERIC UI ---*/

  // mobile menu
  $(".menu-toggle").on("click", function(e) {
    e.stopPropagation();
    $("body").addClass("menu-active");
  });

  // prevent mobile menu to be closed when clicking inside
  $(".top-bar nav").on("click", function(e) {
    e.stopPropagation();
    $(".menu-item-has-children.active").removeClass("active");
  });

  // close menu when clicking outside
  $(document).on("click", function(e) {
    $("body").removeClass("menu-active");
  });

  // destructive function only for mobile
  if(deviceWidth < 1080) {
    $(".menu-item-has-children > a").on("click", function(e) {
      e.preventDefault();
      e.stopPropagation();

      $(this).parent().toggleClass("active");
    });
  }

  /* -----------
    SLIDER
  ----------- */

  if($("#slider").length > 0) {
    var args = { dots: true, arrows: false };

    // mobile slider
    $("#slider-mobile").slick(args);

    // desktop slider, if loaded in mobile, disable auto play
    if(deviceWidth > 480) {
      args.autoplay = true;
      args.autoplaySpeed = 3000;
      args.fade = true;
      args.speed = 800;
    }
    $("#slider").slick(args);
  }

  /* ------------
    LIGHTBOX
  ------------ */

  if($(".fancybox-thumb").length > 0) {
    var args = {
      prevEffect: "none",
      nextEffect: "none",
      autoCenter: false,
      helpers: {
        title: { type: "over" },
        overlay: {
          locked: false
        },
        thumbs: {
          width: 75,
          height: 100,
        }
      }
    };

    if(deviceWidth > 768) {
      args.minHeight = 600;
      args.helpers.title = false;
    }

    $(".fancybox-thumb").fancybox(args);
  }
}() );
