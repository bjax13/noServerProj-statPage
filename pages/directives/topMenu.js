angular.module('statApp')
    .directive('topMenu', function() {
        return {
            restrict: 'AE',
            templateUrl: "pages/directives/templets/topMenu.html",
            controller: 'mainCtrl',
            scope: {
                name: '=',

            },
            link: function(scope, element, attrs) {

                var $header = $('.header__fake');

                $(window).scroll(function() {

                    var scroll = $(window).scrollTop();

                    if (scroll > 15) {
                        $header.addClass('animated').removeClass('fix');
                    } else {
                        $header.removeClass('animated').addClass('fix');
                    }
                });
            }
        }
    });
