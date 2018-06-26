
import {tasksMongo} from "./../tasks.js";


Meteor.publish("tasks", function() {
	return  tasksMongo.find({});
});

Meteor.publish("tasksList", function() {
	return  tasksMongo.find({}, {fields : {
		name : 1,
	}});
});

Meteor.publish("oneTasks", function(tasksId) { 
	return  tasksMongo.find({_id : tasksId});
});
    