
import React, { Component } from 'react';
import { browserHistory } from 'react-router';
import { createContainer } from 'react-meteor-data';


export const UsersService = (WrappedComponent)=>{
	
	 class _UsersService extends Component {

		constructor(props){
			super(props);
		}
		 
		 logout(){
			Meteor.logout();
			browserHistory.push("/login")
		 }
		
		render (){
			return (
				<WrappedComponent
					user = {this.props.user}
					logout = {()=>this.logout()}
				/>
			)
		}

	}
	
	return _UsersService = createContainer((props) => {
	//console.log(props)
	  var userSub = Meteor.subscribe("userData");
	  return {
		user : Meteor.user() || false,
	  };
	}, _UsersService);

}

