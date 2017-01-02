angular.module('statApp',['ui.router'])
.config(function ($stateProvider, $urlRouterProvider) {

  $urlRouterProvider.otherwise('/home');



  $stateProvider
    .state('home',{
      url: '/home',
      templateUrl: 'pages/home/home.html',
      controller: 'homeCtrl'
    })
    .state('soloStat',{
      url: '/soloStats',
      templateUrl: 'pages/soloStat/soloStat.html',
      controller: 'soloStatCtrl'
    })
    .state('teamStat',{
      url: '/teamStats',
      templateUrl: 'pages/teamStat/teamStat.html',
      controller: 'teamStatCtrl'
    })

})
