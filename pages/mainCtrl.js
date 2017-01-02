angular.module('statApp')
  .controller('mainCtrl', function ($scope, $location, mainSvc) {
    $scope.scroll = 0;

    $scope.displayNav = false;

    $scope.toggleNav = function () {
      $scope.displayNav = !$scope.displayNav;
    }


    $scope.currentPage = $location.absUrl();
    console.log($scope.currentPage);

  })
