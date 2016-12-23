'use strict';

angular.module('statApp', ['ui.router']).config(function ($stateProvider, $urlRouterProvider) {

  $urlRouterProvider.otherwise('/');

  $stateProvider.state('home', {
    url: '/',
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

angular.module('statApp').service('codewarsSvc', function ($http, $q) {

  this.coderInfo = function () {
    var defer = $q.defer();
    $http({
      method: 'GET',
      url: 'https://www.codewars.com/api/v1/users/bjack13'
      // DA2K-3FnsohzhzAp7xvQ codewars auth key
    }).then(function (response) {
      console.log(response.data);
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
      console.log(dataObj.skills);
      if (dataObj.skills === null) {
        dataObj.skills = 'No skills displayed on CodeWars.com';
      }

      defer.resolve(dataObj);
    });

    return defer.promise;
  };
});
'use strict';

angular.module('statApp').controller('soloStatCtrl', function ($scope, codewarsSvc) {
  $scope.test = "It is alive!!";

  $scope.coderInfo = function () {
    codewarsSvc.coderInfo().then(function (response) {
      console.log(response);
      $scope.soloUser = response;
    });
  };

  $scope.coderInfo();
});
'use strict';

angular.module('statApp').controller('teamStatCtrl', function ($scope) {
  $scope.test = "It is alive!!";
});
//# sourceMappingURL=bundle.js.map
