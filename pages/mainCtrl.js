angular.module('statApp')
  .controller('mainCtrl', function ($scope, $location,$rootScope, mainSvc) {
    $scope.scroll = 0;

    $scope.displayNav = false;

    $scope.toggleNav = function () {
      $scope.displayNav = !$scope.displayNav;
    }

    $scope.changePage = function () {
      $scope.currentPage = $location.url().slice(1);
      console.log($scope.currentPage);
      console.log($scope);

    }
    $scope.changePage();

    $rootScope.$on("$stateChangeSuccess", function () {
      $scope.changePage();
    })

  })
