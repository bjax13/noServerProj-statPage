angular.module('statApp')
  .service('codewarsSvc',function ($http, $q) {

    this.coderInfo = function () {
      var defer = $q.defer();
      $http ({
        method: 'GET',
        url: 'https://www.codewars.com/api/v1/users/bjack13'
        // DA2K-3FnsohzhzAp7xvQ codewars auth key
      }).then(function (response) {
        defer.resolve(response.data)
      })

      return defer.promise;
    }


    // this.getLuke = function () {
    //     var defer = $q.defer();
    //     $http({
    //       method: 'GET',
    //       url: baseUrl + 'api/people/1'
    //     }).then(function (response) {
    //       defer.resolve(response.data);
    //
    //     })
    //     return defer.promise;
    //   }

  })
