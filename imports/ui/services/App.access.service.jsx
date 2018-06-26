import React, { Component } from 'react';
import { Router, Route, Link, IndexRoute, hashHistory, browserHistory, DefaultRoute } from 'react-router';

export const AppAccessService = (WrappedComponent) => {
	
	return class WrappedComponentWithAppAccessService extends Component {
		
	    constructor(props) {
            super(props)
        }
		
		
		componentDidMount(){
			if(!Meteor.user()){
				browserHistory.push("/login")
			}
		}
		
		
		render (){
			return <WrappedComponent
				{...this.props}
				/>
		}	
	}
}





