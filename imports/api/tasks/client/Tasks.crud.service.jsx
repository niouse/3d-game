import React, { Component } from 'react';
import {tasksSchema} from "./../tasks.schema.js";
import {tasksMongo} from "./../tasks.js";

export const TasksCrudService = (WrappedComponent)=>{
	
	var tasksCrudContext = tasksSchema.namedContext("tasksCrudOp")

	return class _TasksCrudService extends Component {

		constructor(props){
			super(props);
		}

		createTask(options , callback){
			tasksSchema.clean(options);
			if(tasksCrudContext.validate(options)){
				tasksMongo.insert(options, callback);
			}
			else {
				let err = {}
				let res = false
				err.reason = "Problematic keys :"+tasksCrudContext._invalidKeys.map((x)=>{return x.name}).toString()
				callback(err, res)
			}
		}
		
		readTask(options , callback){

		}
		
		updateTask(id, options , callback){
			console.log(options)
			tasksSchema.clean(options);
			if(tasksCrudContext.validate(options)){
				tasksMongo.update({_id : id}, {$set : options}, callback);
			}
			else {
				let err = {}
				let res = false
				err.reason = "Problematic keys :"+tasksCrudContext._invalidKeys.map((x)=>{return x.name}).toString()
				callback(err, res)
			}
		}
		
		deleteTask(id , callback){
			tasksMongo.remove({_id : id}, callback);
		}
		
		render (){
			return (
				<WrappedComponent
					{...this.props}
					createTask = {this.createTask}
					readTask = {this.readTask}
					updateTask = {this.updateTask}
					deleteTask = {this.deleteTask}
				/>
			)
		}
	}
}