"use strict";

app.controller("MushroomCtrl", function($scope, MushroomFactory){
    MushroomFactory.getMushrooms().then(function(newArray){
	  $scope.mushrooms = newArray;
    });
});
