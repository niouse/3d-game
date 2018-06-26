
import {tasksMongo} from "./../tasks.js";

tasksMongo.allow({
	insert : ()=>{
		return true
	},
	update : ()=>{
		return true
	},
	remove : ()=>{
		return true
	}
})
    