"use strict";

var app = angular.module("MushroomApp", []);

app.controller("MushroomCtrl", function($scope, $http){
    $http({
	  method: 'GET',
	  url: '../mushroom.json'
	}).then(function successCallback(response) {
	    let newArray = [];
	    for (var i in response.data.mushrooms) {
	    	let newObj = {};
	    	newObj.name = Object.keys(response.data.mushrooms[i]);
	    	newObj.description = response.data.mushrooms[i][newObj.name].description;
	    	newObj.edible = response.data.mushrooms[i][newObj.name].edible;
	    	newObj.color = newObj.edible ? "success" : "danger";
	    	newArray.push(newObj);


	    }
	  	$scope.mushrooms = newArray;
	  	console.log(newArray);

	  }, function errorCallback(response) {
	    // called asynchronously if an error occurs
	    // or server returns response with an error status.
	  });
	});
