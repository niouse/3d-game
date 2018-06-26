
import {cubesMongo} from "./../cubes.js";

cubesMongo.allow({
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
    