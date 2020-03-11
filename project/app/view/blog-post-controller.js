"use strict"

var app = require('../app');


var blogPostController = function($scope){
    
    $scope.posts= [];

    $scope.posts.push(
        {
            "id": Math.random(),
            "title": 'Este es mi titulo',
            "subTitle" : 'Mi sub-titulo',
            'content' : 'Este es mi contenido Este es mi contenido Este es mi contenido Este es mi contenido',
            "messages": [
                {"author" : "Carlos Castillo", "message": "Thanks for the awesome port."},
                {"author" : "Liliana Castillo", "message": "That was great, It made my day."}

            ]
        }
    );

    $scope.posts.push(
        {
            "id": Math.random(),
            "title": 'C\'est mon titre',
            "subTitle" : 'Ceci est mon sous-titre',
            'content' : 'Este es mi contenido Este es mi contenido Este es mi contenido Este es mi contenido',
            "messages": [
                {"author" : "Carlos Castillo", "message": "Thanks for the awesome port."},
                {"author" : "Liliana Castillo", "message": "That was great, It made my day."}
            ]
        }
    );

    $scope.posts.push(
        {
            "id": Math.random(),
            "title": 'This is my title',
            "subTitle" : 'This is my sub-title',
            'content' : 'Este es mi contenido Este es mi contenido Este es mi contenido Este es mi contenido',
            "messages": [
                {"author" : "Carlos Castillo", "message": "Thanks for the awesome port."},
                {"author" : "Liliana Castillo", "message": "That was great, It made my day."}

            ]
        }
    );

    $scope.posts.push(
        {
            "id": Math.random(),
            "title": 'This is my title',
            "subTitle" : 'This is my sub-title',
            'content' : 'Este es mi contenido Este es mi contenido Este es mi contenido Este es mi contenido',
            "messages": []
        }
    );
}

app.controller('blogPostController',['$scope', blogPostController]);

module.exports = app;