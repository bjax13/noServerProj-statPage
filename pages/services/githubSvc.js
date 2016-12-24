angular.module('statApp')
  .service('githubSvc',function ($http, $q) {

    this.gitInfo = function (user) {
      var defer = $q.defer();
      $http ({
        method: 'GET',
        url: `https://api.github.com/search/users?q=${user}+in:%3Elogin`
        // DA2K-3FnsohzhzAp7xvQ codewars auth key
      }).then(function (response) {
        console.log(response);

        // var dataObj = {
        //
        // }
        // console.log(dataObj.skills);
        // if (dataObj.skills === null) {
        //   dataObj.skills = 'No skills displayed on CodeWars.com'
        // }

        defer.resolve(response)
      })

      return defer.promise;
    }




  })
