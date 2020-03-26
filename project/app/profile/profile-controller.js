"use strict"

var app = require('../app');

var profileController = function($scope, dataService, toastr ){

    $scope.basicInfo = dataService.getBasicInfoData();    
    $scope.social = dataService.getSocialData();

    $scope.basicInfoEdit = angular.copy($scope.basicInfo);    
    $scope.socialEdit = angular.copy($scope.social);


    $scope.saveBasicForm = function(){
        
        dataService.saveBasicInfo(angular.copy($scope.basicInfoEdit));
        $scope.basicInfo = angular.copy($scope.basicInfoEdit);
        toastr["success"]("Tu información fue actualizada")
    };

    $scope.saveSocialForm = function(){
        
        dataService.saveSocialInfo(angular.copy($scope.socialEdit));
        $scope.social = angular.copy($scope.socialEdit);
        toastr["success"]("Tu información fue actualizada","continuar..")
    };

}

app.controller('profileController',['$scope','dataService','toastr', profileController]);

module.exports = app;