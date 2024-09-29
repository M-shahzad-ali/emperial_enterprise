$(".slick-slider").slick({
  slidesToShow: 1,
  infinite: false,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 500, // Slows down autoplay for a smoother viewing experience
  arrows: false, // Enable or disable arrows as needed
  dots: false, // Enable or disable dots as needed
  fade: true, // Fades instead of sliding
  cssEase: "cubic-bezier(0.25, 0.46, 0.45, 0.94)", // Smoother easing effect for the fade
  speed: 800, // Slower transition speed for better effect
  // pauseOnHover: true, // Pause autoplay when hovered
  pauseOnFocus: true, // Pause autoplay when focused
});
$(".logoPArent").slick({
  slidesToShow: 5,
  infinite: true,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 0, // Set to 0 for continuous sliding
  speed: 4000, // Adjust speed for continuous scroll (lower for faster)
  cssEase: "linear", // Ensures continuous, smooth scrolling
  arrows: true, // Enable or disable arrows as needed
  dots: false, // Enable or disable dots as needed
  prevArrow: "<span class='arr-left'><i class='fas fa-angle-left'></i></span>",
  nextArrow:
    "<span class='arr-right'><i class='fas fa-angle-right'></i></span>",
  responsive: [
    {
      breakpoint: 1280,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 992,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 540,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: false,
        speed: 1000,
      },
    },
  ],
});
$(".parentinner").slick({
  slidesToShow: 3,
  infinite: true,
  slidesToScroll: 1,
  autoplay: false,
  autoplaySpeed: 0, // Set to 0 for continuous slidin
  cssEase: "linear", // Ensures continuous, smooth scrolling
  arrows: true, // Enable or disable arrows as needed
  dots: false, // Enable or di
  prevArrow: "<span class='arr-left'><i class='fas fa-angle-left'></i></span>",
  nextArrow:
    "<span class='arr-right'><i class='fas fa-angle-right'></i></span>",
  responsive: [
    {
      breakpoint: 1280,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 992,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 540,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: false,
        speed: 1000,
      },
    },
  ],
});

$(document).ready(function () {
  switchDiv();

  $("li:first-child").addClass("first");
  $("li:last-child").addClass("last");

  $('[href="#"]').attr("href", "javascript:;");

  $(".menu-Bar").click(function () {
    $(this).toggleClass("open");
    $(".menuWrap").toggleClass("open");
    $("body").toggleClass("ovr-hiddn");
  });

  $(".loginUp").click(function () {
    $(".LoginPopup").fadeIn();
    $(".overlay").fadeIn();
  });

  $(".signUp").click(function () {
    $(".signUpPop").fadeIn();
    $(".overlay").fadeIn();
  });

  $(".closePop,.overlay").click(function () {
    $(".popupMain").fadeOut();
    $(".overlay").fadeOut();
  });

  $(".menu .menu-item-has-children").addClass("dropdown-nav ");
  $(".menu .menu-item-has-children ul.sub-menu").addClass("dropdown");

  /* Tabbing Function */
  $("[data-targetit]").on("click", function (e) {
    $(this).addClass("active");
    $(this).siblings().removeClass("active");
    var target = $(this).data("targetit");
    $("." + target)
      .siblings('[class^="box-"]')
      .hide();
    $("." + target).fadeIn();
    $(".tabViewList").slick("setPosition", 0);
  });

  // Accordian
  $(".accordian h4").click(function () {
    $(".accordian li").removeClass("active");
    $(this).parent("li").addClass("active");
    $(".accordian li div").slideUp();
    $(this).parent("li").find("div").slideDown();
  });

  $("li.dropdown-nav").hover(function () {
    $(this).children("ul").stop(true, false, true).slideToggle(300);
  });

  $(".searchBtn").click(function () {
    $(".searchWrap").addClass("active");
    $(".overlay").fadeIn("active");
    $(".searchWrap input").focus();
    $(".searchWrap input").focusout(function (e) {
      $(this).parents().removeClass("active");
      $(".overlay").fadeOut("active");
      $("body").removeClass("ovr-hiddn");
    });
  });

  $(".right_banner_image").slick({
    dots: false,
    infinite: true,
    speed: 300,
    slidesToShow: 2,
    arrows: false,
    // prevArrow: $('.prev'),
    // nextArrow: $('.next')
  });
});

// $(window).on("scroll touchmove", function() {
//     $("header").toggleClass("stickyOpen", $(document).scrollTop() > 200);
// });

$(window).on("load", function () {
  var currentUrl = window.location.href.substr(
    window.location.href.lastIndexOf("/") + 1
  );
  $("ul.menu li a").each(function () {
    var hrefVal = $(this).attr("href");
    if (hrefVal == currentUrl) {
      $(this).removeClass("active");
      $(this).closest("li").addClass("active");
      $("ul.menu li.first").removeClass("active");
    }
  });
});

/* RESPONSIVE JS */
if ($(window).width() < 824) {
}

function switchDiv() {
  var $window = $(window).outerWidth();
  if ($window <= 768) {
    $(".topAppendTxt").each(function () {
      var getdtd = $(this).find(".cloneDiv").clone(true);
      $(this).find(".cloneDiv").remove();
      $(this).append(getdtd);
    });
  }
}

function goToScroll(e) {
  $("html, body").animate(
    {
      scrollTop: $("." + e).offset().top,
    },
    1000
  );
}
