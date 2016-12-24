angular.module('statApp')
  .controller('soloStatCtrl', function ($scope, codewarsSvc, githubSvc) {
    $scope.test = "It is alive!!";

    $scope.coderInfo = function () {
      codewarsSvc.coderInfo().then(function (response) {
        console.log(response.userName);
        $scope.gitInfo("bjax13");
        $scope.soloUser = response;
      })
    }
    $scope.gitInfo = function (user) {
      console.log(user);
      githubSvc.gitInfo(user).then(function (response) {
        console.log(response);
        $scope.soloUserGit = response;
      })
    }



    $scope.coderInfo();


  })
