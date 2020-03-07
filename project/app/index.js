"use strict";

var jquery = require('jquery');
var angular = require('angular');

require('angular-toastr');
require('@uirouter/angularjs');
require('./app');

//Controllers
require('./view/blog-post-controller');

//Directives
require('./view/blog-post-directive');