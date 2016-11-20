const app = angular.module("defhacks",[]);

app.controller('mlhCtrl', function($scope, $http) {
  $http.get('http://google.com').success(function(data, status, headers, config) {
        $scope.example4 = data;
    });
     

});
