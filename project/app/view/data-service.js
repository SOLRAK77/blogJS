"use strict";

var app = require('../app');

var dataService = function(mockDataService){
    this.data = [];
    this.data.push(mockDataService.getPost("Learn Angular from Strach","This is my title Angular"));
    this.data.push(mockDataService.getPost("Learn Python like PRO","This is my title Python"));
    this.data.push(mockDataService.getPost("Learn ASP from Strach","This is my title ASP"));
    this.data.push(mockDataService.getPost("Learn JS like PRO","This is my title JS"));
}

var proto = dataService.prototype;

proto.getPostData = function(){
    return this.data;
}

app.service('dataService',['mockDataService',dataService]);

module.exports = app;