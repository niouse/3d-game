
import {tasksMongo} from "./../tasks.js";

Meteor.methods({
	gettasksKeys : function(){
		var tasksKeys = [];
		for (var key in tasksMongo.findOne({})){
			tasksKeys.push(key)
		};
		return tasksKeys;
	}
})
    