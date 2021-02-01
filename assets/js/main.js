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
        /* Tabs */
        $('.tabs a').on('click', function () {
            var link = $(this).attr('data-link');
            var pane = $('[data-pane="' + link + '"]');
            $('.tabs__link.active').removeClass('active');
            $(this).addClass('active');
            $('.tabs__pane.active').removeClass('active');
            pane.addClass('active');
        });

        /*File Up*/
        $.fileup({
            url: '/file/upload',
            inputID: 'upload-2',
            dropzoneID: 'upload-2-dropzone',
            queueID: 'upload-2-queue',
            lang: 'ru',
            onSelect: function (file) {
                $('#multiple button').show();
            },
            onRemove: function (file, total) {
                if (file === '*' || total === 1) {
                    $('#multiple button').hide();
                }
            },
            onSuccess: function (response, file_number, file) {
                Snarl.addNotification({
                    title: 'Upload success',
                    text: file.name,
                    icon: '<i class="fa fa-check"></i>'
                });
            },
            onError: function (event, file, file_number) {
                Snarl.addNotification({
                    title: 'Upload error',
                    text: file.name,
                    icon: '<i class="fa fa-times"></i>'
                });
            }
        });

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