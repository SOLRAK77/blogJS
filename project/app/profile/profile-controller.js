"use strict"

var app = require('../app');


var profileController = function($scope, dataService ){

    $scope.basicInfo = dataService.getBasicInfoData();
    $scope.social = dataService.getSocialData();

}

app.controller('profileController',['$scope','dataService', profileController]);

module.exports = app;