"use strict"

var app = require('../app');


var blogPostController = function($scope){
    
    $scope.posts= [];

    $scope.posts.push(
        {
            "id": Math.random(),
            "title": 'This is my title',
            "subTitle" : 'This is my sub-title',
            'content' : 'Este es mi contenido Este es mi contenido Este es mi contenido Este es mi contenido'
        }
    );

    $scope.posts.push(
        {
            "id": Math.random(),
            "title": 'This is my title',
            "subTitle" : 'This is my sub-title',
            'content' : 'Este es mi contenido Este es mi contenido Este es mi contenido Este es mi contenido'
        }
    );

    $scope.posts.push(
        {
            "id": Math.random(),
            "title": 'This is my title',
            "subTitle" : 'This is my sub-title',
            'content' : 'Este es mi contenido Este es mi contenido Este es mi contenido Este es mi contenido'
        }
    );

    $scope.posts.push(
        {
            "id": Math.random(),
            "title": 'This is my title',
            "subTitle" : 'This is my sub-title',
            'content' : 'Este es mi contenido Este es mi contenido Este es mi contenido Este es mi contenido'
        }
    );

}

app.controller('blogPostController',['$scope', blogPostController]);

module.exports = app;