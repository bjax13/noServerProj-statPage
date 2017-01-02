angular.module('statApp')
  .service('githubSvc',function ($http, $q) {




    this.gitInfo = function (user) {
      var defer = $q.defer();
      $http ({
        method: 'GET',
        url: `https://api.github.com/search/users?q=${user}+in:%3Elogin`
        // DA2K-3FnsohzhzAp7xvQ codewars auth key
      }).then(function (response) {
        console.log(response.data.items[0]);



        var dataObj = {
          avatarUrl: response.data.items[0].avatar_url,
          gitApiUrl: response.data.items[0].url,
          login: response.data.items[0].login,
          gitProfileLink: response.data.items[0].html_url,
          gitSummaryImg: "http://ghchart.rshah.org/B92F21/" + response.data.items[0].login,
          // <img src="http://ghchart.rshah.org/409ba5/2016rshah" alt="2016rshah's Blue Github Chart" />

        }


        defer.resolve(dataObj)
      })

      return defer.promise;
    }




  })
