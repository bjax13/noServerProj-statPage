angular.module('statApp',['ui.router'])
.config(function ($stateProvider, $urlRouterProvider) {

  $urlRouterProvider.otherwise('/');


  $stateProvider
    .state('home',{
      url: '/',
      templateUrl: 'pages/home/home.html',
      controller: 'homeCtrl'
    })
    .state('soloStat',{
      url: '/soloStat',
      templateUrl: 'pages/soloStat/soloStat.html',
      controller: 'soloStatCtrl'
    })
    .state('teamStat',{
      url: '/teamStat',
      templateUrl: 'pages/teamStat/teamStat.html',
      controller: 'teamStatCtrl'
    })

})
