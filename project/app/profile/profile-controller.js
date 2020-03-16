"use strict"

var app = require('../app');

var profileController = function($scope, dataService ){

    $scope.basicInfo = dataService.getBasicInfoData();
    //$scope.social = dataService.getSocialData();

    $scope.basicInfoEdit = angular.copy($scope.basicInfo);
    $scope.saveBasicForm = function(){
        
        dataService.saveBasicInfo($scope.basicInfoEdit);
        $scope.basicInfo = $scope.basicInfoEdit;
    };

}

app.controller('profileController',['$scope','dataService', profileController]);

module.exports = app;