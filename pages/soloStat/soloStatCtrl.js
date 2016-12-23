angular.module('statApp')
  .controller('soloStatCtrl', function ($scope, codewarsSvc) {
    $scope.test = "It is alive!!";

    $scope.coderInfo = function () {
      codewarsSvc.coderInfo().then(function (response) {
        console.log(response);
        $scope.soloUser = response;
      })
    }

    $scope.coderInfo();


  })
