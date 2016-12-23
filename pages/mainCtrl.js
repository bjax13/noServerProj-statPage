angular.module('statApp')
  .controller('mainCtrl', function ($scope, mainSvc) {

    $scope.displayNav = false;

    $scope.toggleNav = function () {
      $scope.displayNav = !$scope.displayNav;
    }

  })
