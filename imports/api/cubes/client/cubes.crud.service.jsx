import React, { Component } from 'react';
//import {cubesSchema} from "./../cubes.schema.js";
import {cubesMongo} from "./../cubes.js";

export default CubesCrudService = ()=>{
	//var cubesCrudContext = cubesSchema.namedContext("cubesCrudOp")

	return (WrappedComponent)=>{
		return class _CubesCrudService extends Component {

			constructor(props){
				super(props);
			}

			createCube(options , callback){
				//cubesSchema.clean(options);
				/*if(cubesCrudContext.validate(options)){
					cubesMongo.insert(options, callback);
				}
				else {
					let err = {}
					let res = false
					err.reason = "Problematic keys :"+cubesCrudContext._invalidKeys.map((x)=>{return x.name}).toString()
					callback(err, res)
				}*/
				cubesMongo.insert(options, callback);
			}

			readCube(options , callback){

			}

			updateCube(id, options , callback){
				console.log(options)
				//cubesSchema.clean(options);
				if(cubesCrudContext.validate(options)){
					cubesMongo.update({_id : id}, {$set : options}, callback);
				}
				else {
					let err = {}
					let res = false
					err.reason = "Problematic keys :"+cubesCrudContext._invalidKeys.map((x)=>{return x.name}).toString()
					callback(err, res)
				}
			}

			deleteCube(id , callback){
				cubesMongo.remove({_id : id}, callback);
			}

			render (){
				return (
					<WrappedComponent
						{...this.props}
						createCube = {this.createCube}
						readCube = {this.readCube}
						updateCube = {this.updateCube}
						deleteCube = {this.deleteCube}
					/>
				)
			}
		}
	}
}