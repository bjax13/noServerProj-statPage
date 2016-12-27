angular.module('statApp')
  .controller('soloStatCtrl', function ($scope, codewarsSvc, githubSvc) {
    $scope.test = "It is alive!!";

    $scope.coderInfo = function () {
      codewarsSvc.coderInfo().then(function (response) {

        $scope.gitInfo("bjax13");
        $scope.soloUserCodeWars = response;
      })
    }
    $scope.gitInfo = function (user) {

      githubSvc.gitInfo(user).then(function (response) {
        console.log(response);
        $scope.soloUserGit = response;
      })
    }



    $scope.coderInfo();


  })
