/*jslint browser: true*/
/*global $, jQuery ,AOS*/

(function ($) {

    "use strict";

    var $window = $(window),
        $body = $('body'),
        $foxappMenu = $('.foxapp-header');

    /*START PRELOADER JS & REFRESH AOS*/
    $window.on('load', function () {
        $('.preloader').delay(350).fadeOut('slow');
        AOS.refresh();
    });
    /*END PRELOADER JS & REFRESH AOS*/


    $(document).ready(function () {

        /*START AOS JS*/
        AOS.init({
            disable: 'mobile',
            once: true,
            duration: 600
        });
        /*END AOS JS*/

        /*START SCROLL SPY JS*/
        $body.scrollspy({
            target: '#main_menu',
        });
        /*END SCROLL SPY JS*/

        /*START MENU JS*/
        $('a.anchor').on('click', function (e) {
            var anchor = $(this);
            var ancAtt = $(anchor.attr('href'));
            $('html, body').stop().animate({
                scrollTop: ancAtt.offset().top
            }, 1000);
            e.preventDefault();
        });

        $window.scroll(function () {
            var currentLink = $(this);
            if ($(currentLink).scrollTop() > 500) {
                $foxappMenu.addClass("sticky");
            } else {
                $foxappMenu.removeClass("sticky");
            }
        });
        /*END MENU JS*/


    });

}(jQuery));