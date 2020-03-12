"use strict";

var app = require('../app');

var mockDataService = function() {
    this.getPost = function(title, subTitle) {
        return {
            "id": Math.random(),
            "title": title,
            "subTitle" : subTitle,
            'content' : 'Este es un mensaje dentr de ' + title  + ' pensando en el subtitulo' + subTitle,
            "messages": [
                {"author" : "Carlos Castillo", "message": "Gracias por el mensaje " + title}
            ]
        }
    }
}

app.service('mockDataService',mockDataService);

module.exports = app;