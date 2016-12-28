angular.module('statApp')
    .directive('topMenu', function() {
        return {
            restrict: 'AE',
            templateUrl: "pages/directives/templets/topMenu.html",
            scope: {
                name: '='
            },
            link: function(scope, element, attrs) {
                var currentTime = new Date();
                scope.time = currentTime

                // $header = $('.header__fake');
                //
                // $(window).scroll(function() {
                //
                //     var scroll = $(window).scrollTop();
                //
                //     if (scroll > 20) {
                //         $header.addClass('animated').removeClass('fix');
                //     } else {
                //         $header.removeClass('animated').addClass('fix');
                //     }
                // });
            }
        }
    });
