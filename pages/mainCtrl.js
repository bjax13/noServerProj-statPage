angular.module('statApp')
  .controller('mainCtrl', function ($scope, $location, mainSvc) {
    $scope.scroll = 0;

    $scope.displayNav = false;

    $scope.toggleNav = function () {
      $scope.displayNav = !$scope.displayNav;
    }

    $scope.changePage = function () {
      $scope.currentPage = $location.url();
      console.log($scope.currentPage);
    }
    $scope.changePage();

  })
