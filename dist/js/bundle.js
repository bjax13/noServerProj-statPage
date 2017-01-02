'use strict';

angular.module('statApp', ['ui.router']).config(function ($stateProvider, $urlRouterProvider) {

  $urlRouterProvider.otherwise('/home');

  $stateProvider.state('home', {
    url: '/home',
    templateUrl: 'pages/home/home.html',
    controller: 'homeCtrl'
  }).state('soloStat', {
    url: '/soloStat',
    templateUrl: 'pages/soloStat/soloStat.html',
    controller: 'soloStatCtrl'
  }).state('teamStat', {
    url: '/teamStat',
    templateUrl: 'pages/teamStat/teamStat.html',
    controller: 'teamStatCtrl'
  });
});
'use strict';

angular.module('statApp').controller('homeCtrl', function ($scope) {
  $scope.test = "It is alive!!";
});
'use strict';

angular.module('statApp').directive('scrollPosition', function ($window) {
  return {
    scope: {
      scroll: '=scrollPosition'
    },
    link: function link(scope, element, attrs) {
      var windowEl = angular.element($window);

      var handler = function handler() {
        // console.log(window.scrollY);
        scope.scroll = window.scrollY;
      };
      windowEl.on('scroll', scope.$apply.bind(scope, handler));
      handler();
    }
  };
});
'use strict';

angular.module('statApp').directive('topMenu', function () {
    return {
        restrict: 'AE',
        templateUrl: "pages/directives/templets/topMenu.html",
        controller: 'mainCtrl',
        scope: {
            name: '='

        },
        link: function link(scope, element, attrs) {

            var $header = $('.header__fake');

            $(window).scroll(function () {

                var scroll = $(window).scrollTop();

                if (scroll > 20) {
                    $header.addClass('animated').removeClass('fix');
                } else {
                    $header.removeClass('animated').addClass('fix');
                }
            });
        }
    };
});
'use strict';

angular.module('statApp').service('codewarsSvc', function ($http, $q) {

  this.coderInfo = function () {
    var defer = $q.defer();
    $http({
      method: 'GET',
      url: 'https://www.codewars.com/api/v1/users/bjack13'
      // DA2K-3FnsohzhzAp7xvQ codewars auth key
    }).then(function (response) {
      console.log(response);

      var dataObj = {
        userName: response.data.username,
        summaryImg: 'https://www.codewars.com/users/' + response.data.username + '/badges/large',
        clan: response.data.clan,
        honor: response.data.honor,
        leaderboardPosition: response.data.leaderboardPosition,
        overallRank: response.data.ranks.overall,
        skills: response.data.skills,
        challangeCompleted: response.data.codeChallenges.totalCompleted
      };

      if (dataObj.skills === null) {
        dataObj.skills = 'No skills displayed on CodeWars.com';
      } else {
        var skillString = '';
        for (var i = 0; i < dataObj.skills.length; i++) {

          skillString += dataObj.skills[i] + " ";
        }
        dataObj.skills = skillString;
      }

      defer.resolve(dataObj);
    });

    return defer.promise;
  };
});
'use strict';

angular.module('statApp').service('githubSvc', function ($http, $q) {

  this.gitInfo = function (user) {
    var defer = $q.defer();
    $http({
      method: 'GET',
      url: 'https://api.github.com/search/users?q=' + user + '+in:%3Elogin'
      // DA2K-3FnsohzhzAp7xvQ codewars auth key
    }).then(function (response) {
      console.log(response.data.items[0]);

      var dataObj = {
        avatarUrl: response.data.items[0].avatar_url,
        gitApiUrl: response.data.items[0].url,
        login: response.data.items[0].login,
        gitProfileLink: response.data.items[0].html_url,
        gitSummaryImg: "http://ghchart.rshah.org/" + response.data.items[0].login

      };

      defer.resolve(dataObj);
    });

    return defer.promise;
  };
});
'use strict';

angular.module('statApp').service('mainSvc', function () {});
'use strict';

angular.module('statApp').controller('soloStatCtrl', function ($scope, codewarsSvc, githubSvc) {
  $scope.test = "It is alive!!";

  $scope.coderInfo = function () {
    codewarsSvc.coderInfo().then(function (response) {

      $scope.gitInfo("bjax13");
      $scope.soloUserCodeWars = response;
    });
  };
  $scope.gitInfo = function (user) {

    githubSvc.gitInfo(user).then(function (response) {
      console.log(response);
      $scope.soloUserGit = response;
    });
  };

  $scope.coderInfo();
});
'use strict';

angular.module('statApp').controller('teamStatCtrl', function ($scope) {
  $scope.test = "It is alive!!";
});
'use strict';

angular.module('statApp').controller('mainCtrl', function ($scope, $location, mainSvc) {
  $scope.scroll = 0;

  $scope.displayNav = false;

  $scope.toggleNav = function () {
    $scope.displayNav = !$scope.displayNav;
  };

  $scope.changePage = function () {
    $scope.currentPage = $location.url();
    console.log($scope.currentPage);
  };
  $scope.changePage();
});
//# sourceMappingURL=bundle.js.map
