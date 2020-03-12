"use strict"

var app = require('../app');


var blogPostController = function($scope, dataService){
    
    $scope.posts= [];

    $scope.posts = dataService.getPostData();
}

app.controller('blogPostController',['$scope','dataService', blogPostController]);

module.exports = app;