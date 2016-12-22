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

angular.module('statApp').controller('soloStatCtrl', function ($scope) {
  $scope.test = "It is alive!!";
});
'use strict';

angular.module('statApp').controller('teamStatCtrl', function ($scope) {
  $scope.test = "It is alive!!";
});
//# sourceMappingURL=bundle.js.map
