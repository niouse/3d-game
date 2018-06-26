
import React, { Component } from 'react';
import { Router, Route, Link, IndexRoute, hashHistory, browserHistory, DefaultRoute } from 'react-router';

export const AppApi = (WrappedComponent)=>{
		
	return class _AppApi extends Component {

		constructor(props){
			super(props);
		}
		
		componentDidMount(){
			if(this.props.stylesOptionsNext){
				window.addEventListener('resize',()=>{
					this.props.stylesOptionsNext()
				});
			}
		}

		render (){			
			return (
				<WrappedComponent
					{...this.props}
				/>
			)
		}
	}
}



