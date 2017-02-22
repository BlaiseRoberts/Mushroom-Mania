"use strict";


app.factory('MushroomFactory', function ($http, $q) {
	let getMushrooms = ()=>{
		let newArray = [];
		return $q((resolve)=>{
			$http.get('https://mushroom-party.firebaseio.com/mushrooms.json').then((response)=>{
				for (var i in response.data) {
			    	let newObj = {};
			    	newObj.name = Object.keys(response.data[i]);
			    	newObj.description = response.data[i][newObj.name].description;
			    	newObj.edible = response.data[i][newObj.name].edible;
			    	newObj.color = newObj.edible ? "success" : "danger";
			    	newArray.push(newObj);
		    	}
		    	resolve(newArray);
			});
		}) ;
	};
	return {
		getMushrooms
	};
});
