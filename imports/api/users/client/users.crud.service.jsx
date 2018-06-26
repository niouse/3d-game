import React, { Component } from 'react';
import {usersSchema} from "./../users.schema.js"

export const UsersCrudService = (WrappedComponent)=>{
	
	var usersCrudContext = usersSchema.namedContext("usersCrudOp")

	return class _UsersCrudService extends Component {

		constructor(props){
			super(props);
		}

		submitUser(options, callback) {
			Meteor.loginWithPassword(options.email, options.pass, callback)
		}
		
		createUser(options , callback){
			usersSchema.clean(options);
			if(usersCrudContext.validate(options)){
				Meteor.call('register', options , callback);
			}
			else {
				let err = {}
				let res = false
				err.reason = "Problematic keys :"+usersCrudContext._invalidKeys.map((x)=>{return x.name}).toString()
				callback(err, res)
			}
		}
		
		render (){
			return (
				<WrappedComponent
					{...this.props}
					submitUser = {this.submitUser}
					createUser = {this.createUser}
				/>
			)
		}

	}

}