"use strict";

var app = require('../app');

var dataService = function(mockDataService){
    this.data = [];
    this.data.push(mockDataService.getPost("Learn Angular from Strach","This is my title Angular"));
    this.data.push(mockDataService.getPost("Learn Python like PRO","This is my title Python"));
    this.data.push(mockDataService.getPost("Learn ASP from Strach","This is my title ASP"));
    this.data.push(mockDataService.getPost("Learn JS like PRO","This is my title JS"));

    this.basicInfo = {
        name: "Carlos Alfredo Castillo Perez",
        introduccion : "Me gusta saber de tecnologia y quisiera ser un empresario, me gustan los autos"
    }
}

var proto = dataService.prototype;

proto.getPostData = function(){
    return this.data;
}

proto.getBasicInfoData = function(){
    return this.basicInfo;
}

app.service('dataService',['mockDataService',dataService]);

module.exports = app;