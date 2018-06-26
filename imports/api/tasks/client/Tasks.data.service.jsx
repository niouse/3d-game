
import React, { Component } from 'react';
import { browserHistory } from 'react-router';
import { createContainer } from 'react-meteor-data';

import { Subject } from 'rxjs/Subject';

import {tasksMongo} from "./../tasks.js"

export const TasksDataService = (WrappedComponent)=>{
	
	 class _TasksComponentDataService0 extends Component {

		constructor(props){
			super(props);
		}
		 
		 
		 
		render (){
			return (
				this.props.tasksList && this.props.tasksList[0] ?
				<WrappedComponent
					{...this.props}
					task = {this.props.task}
					tasksList = {this.props.tasksList}
					getOneTask = {this.props.getOneTask}
				/> :
				<p>loading</p>
			)
		}
	}
	
	const _TasksDataService1 = createContainer((props) => {
		
	  let taskSubOne = Meteor.subscribe("oneTasks", props.taskId)  
	  let taskSubList = Meteor.subscribe("tasksList")
	  return {
		...props,
		task : tasksMongo.find({_id : props.taskId}).fetch()[0],
		tasksList : tasksMongo.find({}, {fields : {name : 1}}).fetch(),
	  };
	}, _TasksComponentDataService0);
	
	
	return class _TasksDataService2 extends Component {

		constructor(props){
			super(props);
			this.state = {
				taskId : null
			}
		}
		
		getOneTask(id){
			this.setState({
				taskId : id
			})
		}
	 
		render (){
			return (
				<_TasksDataService1
					{...this.props}
					taskId = {this.state.taskId}
					getOneTask={(id)=>this.getOneTask(id)}
				/> 
			)
		}
	}
	
}
