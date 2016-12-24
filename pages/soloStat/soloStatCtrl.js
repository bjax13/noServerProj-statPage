angular.module('statApp')
  .controller('soloStatCtrl', function ($scope, codewarsSvc, githubSvc) {
    $scope.test = "It is alive!!";

    $scope.coderInfo = function () {
      codewarsSvc.coderInfo().then(function (response) {
        console.log(response.username);
        $scope.gitInfo(response.username);
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
