
import {cubesMongo} from "./../cubes.js";

Meteor.methods({
	getcubesKeys : function(){
		var cubesKeys = [];
		for (var key in cubesMongo.findOne({})){
			cubesKeys.push(key)
		};
		return cubesKeys;
	}
})
    