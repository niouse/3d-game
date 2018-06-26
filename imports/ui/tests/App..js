

import { Meteor } from 'meteor/meteor';
import React from 'react';
import { render } from 'react-dom';
import chai  from 'chai';
import { mount, shallow } from 'enzyme';
import {expect} from 'chai';
//import ReactTestUtils from 'react-dom/test-utils'; 
//import {createRenderer} from 'react-addons-test-utils';

// IMPORT AND BUILD BLANK COMPONENENT
import {AppTemplate} from "./../template/App.template.jsx";
import {AppStylesService} from "./../services/App.styles.service.jsx";
import {AppApi} from "./../api/App.api.jsx";

import {AppTextService} from "./../services/App.text.service.jsx";


import defaultStyles from "./../styles/default.js";
import AppText from "./../text/index.js";


// MOCK MATERIAL COMPNENTS
/*import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';*/


let App

// Build template
App = AppTemplate()

//Inject App text via native App text service
App = AppTextService(App, AppText)

// Inject App text via external App text service
//App = AppTextService(App, AppText)

// Inject App api 
App = AppApi(App)

//Inject App styles 
App =AppStylesService(App, defaultStyles)



import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';


if (Meteor.isClient){
  	
/*****************************************************************************************/
/****TEMPLATE TESTS - (App.jsx)*/
/*****************************************************************************************/

  describe('App Component (App.jsx)', function(){

	  
	 before(function(){
		  let testDiv = document.createElement("div");
		  document.body.appendChild(testDiv)
		  testDiv.setAttribute("id", "test-div");
		  //testDiv.setAttribute("style", "visible : none");

		  render(<MuiThemeProvider><App /></MuiThemeProvider>, document.getElementById('test-div'));
	 })
	 
	 after(function() {
		let div = document.getElementById('test-div')
		div.parentNode.removeChild(div)
	  });  
						  
	describe('Render expected component', function(){
	  it("Component root is a div with class \"container\".", function(){  
		  var div = document.getElementsByClassName("container")
		  expect(div.length).to.equal(1)
	  });
	});

	/*describe('Component has expected stand-alone behavior', function(){
		
		before(function () {		  

	  });
		
	})*/

	  
  });

}
