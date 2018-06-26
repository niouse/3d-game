/***********************************************************************************************/
/*****************************************DEESCRIPTION******************************************/
/***********************************************************************************************/
/*
TITLE : AppTemplate

AUTHOR : Sébastien Pinard
description : Root compoenent 

TYPE : FUNCTION ()=>REACT COMPONENT

PROPS : 
	- Login: PropTypes.func.isRequired,
	- styles : PropTypes.object.isRequired


/***********************************************************************************************/
/*****************************************IMPORTS***********************************************/
/***********************************************************************************************/

// REACT
import React, { Component } from 'react';
import { Router, Route, Link, IndexRoute, hashHistory, browserHistory, DefaultRoute } from 'react-router';
import PropTypes from 'prop-types';

import routes from "./App.routes.jsx"

import Routes from "./App.routes.jsx" 
/***********************************************************************************************/
/******************************************TEMPLATE*********************************************/
/***********************************************************************************************/

export const AppTemplate = (CbDemoFps, CbDemoVr, CbDemoCommands)=>{
	
	
	return (props) => {
		const styles = props.styles || {}
		let routes=Routes(CbDemoFps, CbDemoVr, CbDemoCommands)
		return  (
		  <div 
			  id="app-container"
			  className="container"
			  style={styles.container} 
		  >
			{/*<header style={styles.header}>
				<Navigation />
			</header>*/}
				
			 <Router 
				  history={browserHistory} 
				  routes={routes}
			   />	   
		  </div>
    	);
	}
}


AppTemplate.propTypes = {
  styles : PropTypes.object.isRequired,
  Login : PropTypes.func.isRequired,
};
 


