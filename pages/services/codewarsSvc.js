angular.module('statApp')
  .service('codewarsSvc',function ($http, $q) {

    this.coderInfo = function () {
      var defer = $q.defer();
      $http ({
        method: 'GET',
        url: 'https://www.codewars.com/api/v1/users/bjack13'
        // DA2K-3FnsohzhzAp7xvQ codewars auth key
      }).then(function (response) {
        console.log(response.data);
        var dataObj = {
          userName: response.data.username,
          summaryImg:'https://www.codewars.com/users/'+ response.data.username +'/badges/large',
          clan: response.data.clan,
          honor: response.data.honor,
          leaderboardPosition: response.data.leaderboardPosition,
          overallRank: response.data.ranks.overall,
          skills: response.data.skills,
          challangeCompleted: response.data.codeChallenges.totalCompleted,
        }
        console.log(dataObj.skills);
        if (dataObj.skills === null) {
          dataObj.skills = 'No skills displayed on CodeWars.com'
        }


        defer.resolve(dataObj)
      })

      return defer.promise;
    }




  })
