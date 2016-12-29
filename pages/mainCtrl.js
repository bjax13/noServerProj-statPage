angular.module('statApp')
  .controller('mainCtrl', function ($scope, mainSvc) {
    $scope.scroll = 0; 

    $scope.displayNav = false;

    $scope.toggleNav = function () {
      $scope.displayNav = !$scope.displayNav;
    }

  })
