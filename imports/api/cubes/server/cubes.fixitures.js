
import {cubesMongo} from "./../cubes.js";
import cubesDefaults from "./cubes.defaults.js";


loadCubes = function(){
	 if (cubesMongo.find({}).fetch().length === 0) {
		 cubesDefaults.forEach((item, index)=>{
	     	cubesMongo.insert(cubesDefaults[index]); 
		 })
   }
}
    