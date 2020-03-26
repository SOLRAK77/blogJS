"use strict"

var app = require('./app');

var homeController = function($scope){
    $scope.currentView = 'view'
}

app.controller('homeController',['$scope',homeController]);

module.exports = app;