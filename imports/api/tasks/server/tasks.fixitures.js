
import {tasksMongo} from "./../tasks.js";
import tasksDefaults from "./tasks.defaults.js";


loadtasks = function(){
	 if (tasksMongo.find({}).fetch().length === 0) {
		 tasksDefaults.forEach((item, index)=>{
	     	tasksMongo.insert(tasksDefaults[index]); 
		 })
   }
}
    