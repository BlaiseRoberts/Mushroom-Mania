"use strict";

var app = angular.module("MushroomApp", ["ngRoute"]);

app.config(['$routeProvider', function ($routeProvider) {
    $routeProvider.
    when('/', {
        templateUrl: "partials/mushroom-list.html",
        controller: 'MushroomCtrl'
    }).
   	otherwise('/');
}]);

