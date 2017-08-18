var ang = angular.module('boardApp', []);

ang.controller('boardCtrl', function ($scope, $http) {
    function load() {

        $http.get('/dashboard').then(function (res) {
            console.log("fetch data");
            if (!res.data) {
                location.href = "../index.html"
            }
            $scope.userdetails = res.data;

        }, function (res) { console.log(error); });
    }

    $scope.logoff = function () {
        $http.get('/logout').then(function (res) {
            location.href = "exit.html"
        }, function (res) { console.log(error); });
    };

    
$scope.display = "visible";
load();
    
});