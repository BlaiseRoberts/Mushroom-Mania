"use strict";

app.controller("MushroomCtrl", function($scope, $http){
    $http({
	  method: 'GET',
	  url: 'https://mushroom-party.firebaseio.com/mushrooms.json'
	}).then(function successCallback(response) {
	    let newArray = [];
	    console.log(response.data);


	    for (var i in response.data) {
	    	let newObj = {};
	    	newObj.name = Object.keys(response.data[i]);
	    	newObj.description = response.data[i][newObj.name].description;
	    	newObj.edible = response.data[i][newObj.name].edible;
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
