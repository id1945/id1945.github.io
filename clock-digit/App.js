var myApp = angular.module('myApp', []);
myApp.controller('myController', function ($scope) {
    $scope.isDisplay = true;
    $scope.btnName = "Light";
    $scope.isShowHide = function (isShow) {
        $scope.isDisplay = isShow;
        $scope.btnName = isShow ? "Light" : "Dark";
    }
});