import React from 'react';
import { Route, IndexRoute, DefaultRoute } from 'react-router';


module.exports = (CbDemoFps, CbDemoVr, CbDemoCommands) => {
	return [
	 <Route 
		path="/" 
		component={CbDemoFps} 
	/>,
	<Route 
		path="/vr" 
		component={CbDemoVr} 
	/>,
	<Route 
		path="/commands" 
		component={CbDemoCommands} 
	/>,
	]
	
} 

