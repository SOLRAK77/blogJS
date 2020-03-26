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

    this.socialData = {
        works : "GMP Sistemas",
        live : "Ciudad de Mexico",
        birthday : new Date("1977-02-17T05:00:00.000Z"),
        from:"Mexico"
    }
}

var proto = dataService.prototype;

proto.getPostData = function(){
    return this.data;
}

proto.getBasicInfoData = function(){
    return this.basicInfo;
}

proto.getSocialData = function(){
    return this.socialData;
}

proto.saveBasicInfo = function(data){
    this.basicInfo = data;
}

proto.saveSocialInfo = function(data){
    this.socialData = data;
}

app.service('dataService',['mockDataService',dataService]);

module.exports = app;