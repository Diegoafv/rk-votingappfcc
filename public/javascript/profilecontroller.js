var ang = angular.module('profApp', []);

ang.controller('profCtrl', function ($scope, $http) {
    function load(){
       $scope.display = "visible" ; 
      $http.get('/profile').then(function (res) {
      console.log("fetch user data");
      if(!res.data){ 
          location.href = "../index.html" ; }
          console.log(res.data);
          $scope.userinfo = res.data;
      }, function (res) {console.log(error);});
    }

     $scope.logoff = function(){
          $http.get('/logout').then(function (res) {
           location.href = "exit.html"
      }, function (res) {console.log(error);});
     };

    load() ;
});