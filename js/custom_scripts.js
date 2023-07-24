/*======================
  Theme Name: Creative Pixel Studio One Page HTML Template
  Description: Multipurpose One Page HTML Template
  Version: 1.0.0
======================*/

$(function() {
    "use strict";
    var wind = $(window);
    // scrollIt
    $.scrollIt({
        upKey: 38,
        downKey: 40,
        easing: 'swing',
        scrollTime: 600,
        activeClass: 'active',
        onPageChange: null,
        topOffset: -80
    });

    // navbar scrolling background
    wind.on("scroll", function() {

        var bodyScroll = wind.scrollTop(),
            navbar = $(".navbar"),
            navbloglogo = $(".blog-nav .logo> img"),
            logo = $(".navbar .logo> img");

        if (bodyScroll > 100) {

            navbar.addClass("nav-scroll");
            logo.attr('src', 'img/logo-dark.png');

        } else {

            navbar.removeClass("nav-scroll");
            logo.attr('src', 'img/logo-light.png');
            navbloglogo.attr('src', 'img/logo-dark.png');
        }
    });

    // close navbar-collapse when a  clicked
    $(".navbar-nav a").on('click', function() {
        $(".navbar-collapse").removeClass("show");
    });

    // progress bar
    wind.on('scroll', function() {
        $(".skills-progress span").each(function() {
            var bottom_of_object =
                $(this).offset().top + $(this).outerHeight();
            var bottom_of_window =
                $(window).scrollTop() + $(window).height();
            var myVal = $(this).attr('data-value');
            if (bottom_of_window > bottom_of_object) {
                $(this).css({
                    width: myVal
                });
            }
        });
    });

    // sections background image from data background
    var pageSection = $(".bg-img, section");
    pageSection.each(function(indx) {

        if ($(this).attr("data-background")) {
            $(this).css("background-image", "url(" + $(this).data("background") + ")");
        }
    });

    // === owl-carousel === //

    // Testimonials owlCarousel
    $('.utf_testimonails_block .owl-carousel').owlCarousel({
        items: 1,
        loop: true,
        margin: 40,
        mouseDrag: false,
        autoplay: true,
        smartSpeed: 500,
        responsiveClass: true,
        responsive: {
            0: {
                items: 1
            },
            979: {
                items: 1
            },
            1000: {
                items: 1
            }
        }
    });

    // Team owlCarousel
    $('.team .owl-carousel').owlCarousel({
        loop: true,
        margin: 30,
        mouseDrag: false,
        autoplay: true,
        smartSpeed: 500,
        responsiveClass: true,
        responsive: {
            0: {
                items: 1
            },
            700: {
                items: 2
            },
            1000: {
                items: 4
            }
        }
    });

    // Blog owlCarousel
    $('.blog .owl-carousel').owlCarousel({
        loop: true,
        margin: 30,
        mouseDrag: false,
        autoplay: true,
        smartSpeed: 500,
        responsiveClass: true,
        responsive: {
            0: {
                items: 1
            },
            700: {
                items: 2
            },
            1000: {
                items: 3
            }
        }
    });

    // magnificPopup
    $('.gallery').magnificPopup({
        delegate: '.popimg',
        type: 'image',
        gallery: {
            enabled: true
        }
    });

    // YouTubePopUp
    $("a.vid").YouTubePopUp();


    // countUp
    $('.utf_numbers_block .count').countUp({
        delay: 12,
        time: 1600
    });

    // Services Tabs
    $(".tabs-icon").on("click", ".item", function() {

        var myID = $(this).attr("id");

        $(this).addClass("active").siblings().removeClass("active");

        $("#" + myID + "-content").fadeIn(700).siblings().hide();

    });

    // Map Show
    $(".info").on("click", ".icon-toggle", function() {

        $(".info").toggleClass("map-show");
        $(".map").toggleClass("o-hidden");

    });

});

// === window When Loading === //

$(window).on("load", function() {

    var wind = $(window);

    // Preloader
    $(".loading").fadeOut(500);

    // stellar
    wind.stellar();

    // isotope
    $('.gallery').isotope({
        // options
        itemSelector: '.items'
    });

    var $gallery = $('.gallery').isotope({
        // options
    });

    // filter items on button click
    $('.filtering').on('click', 'span', function() {

        var filterValue = $(this).attr('data-filter');

        $gallery.isotope({
            filter: filterValue
        });

    });

    $('.filtering').on('click', 'span', function() {

        $(this).addClass('active').siblings().removeClass('active');

    });

    // contact form validator
    $('#utf_contact_form_block').validator();

    $('#utf_contact_form_block').on('submit', function(e) {
        if (!e.isDefaultPrevented()) {
            var url = "contact.html";

            $.ajax({
                type: "POST",
                url: url,
                data: $(this).serialize(),
                success: function(data) {
                    var messageAlert = 'alert-' + data.type;
                    var messageText = data.message;

                    var alertBox = '<div class="alert ' + messageAlert + ' alert-dismissable"><button type="button" class="close" data-dismiss="alert" aria-hidden="true">&times;</button>' + messageText + '</div>';
                    if (messageAlert && messageText) {
                        $('#utf_contact_form_block').find('.messages').html(alertBox);
                        $('#utf_contact_form_block')[0].reset();
                    }
                }
            });
            return false;
        }
    });

});

// Slider 
$(document).ready(function() {

    var owl = $('.header .owl-carousel');

    // Slider owlCarousel
    $('.slider .owl-carousel').owlCarousel({
        items: 1,
        loop: true,
        margin: 0,
        autoplay: true,
        smartSpeed: 500
    });

    // Slider owlCarousel
    $('.slider-fade .owl-carousel').owlCarousel({
        items: 1,
        loop: true,
        margin: 0,
        autoplay: true,
        smartSpeed: 500,
        animateOut: 'fadeOut'
    });

    owl.on('changed.owl.carousel', function(event) {
        var item = event.item.index - 2; // Position of the current item
        $('h3').removeClass('animated fadeInLeft');
        $('h1').removeClass('animated fadeInRight');
        $('p').removeClass('animated fadeInUp');
        $('.butn').removeClass('animated zoomIn');
        $('.owl-item').not('.cloned').eq(item).find('h3').addClass('animated fadeInLeft');
        $('.owl-item').not('.cloned').eq(item).find('h1').addClass('animated fadeInRight');
        $('.owl-item').not('.cloned').eq(item).find('p').addClass('animated fadeInUp');
        $('.owl-item').not('.cloned').eq(item).find('.butn').addClass('animated zoomIn');
    });

});