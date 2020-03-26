"use strict"

var app = require('../app');

var profileController = function($scope, dataService ){

    $scope.basicInfo = dataService.getBasicInfoData();    
    $scope.social = dataService.getSocialData();

    $scope.basicInfoEdit = angular.copy($scope.basicInfo);    
    $scope.socialEdit = angular.copy($scope.social);


    $scope.saveBasicForm = function(){
        
        dataService.saveBasicInfo($scope.basicInfoEdit);
        $scope.basicInfo = $scope.basicInfoEdit;
    };

    $scope.saveSocialForm = function(){
        
        dataService.saveSocialInfo($scope.socialEdit);
        $scope.social = $scope.socialEdit;
    };

}

app.controller('profileController',['$scope','dataService', profileController]);

module.exports = app;