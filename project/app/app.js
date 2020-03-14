"use strict"

var app = angular.module('blogApp',['ui.router','toastr']);

app.config(
    function($stateProvider, $urlRouterProvider)
    {
        var createState = function (alias, params){
            $stateProvider.state(alias, params);
        };

        createState("view", {url: "/", templateUrl: './app/view/templates/view.html'});
        createState("profile", {url: "/", templateUrl: './app/profile/templates/view.html'});

        $urlRouterProvider.otherwise('/');
    }
);

module.exports = app;

