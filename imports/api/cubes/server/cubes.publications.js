
import {cubesMongo} from "./../cubes.js";


Meteor.publish("cubes", function() {
	return  cubesMongo.find({});
});

Meteor.publish("cubesList", function() {
	return  cubesMongo.find({}, {fields : {
		name : 1,
		pos : 1,
		image : 1,
	}});
});

Meteor.publish("onecubes", function(cubesId) { 
	return  cubesMongo.find({_id : cubesId});
});
    