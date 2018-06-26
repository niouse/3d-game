
import { Meteor } from 'meteor/meteor';
import React from 'react';
import chai  from 'chai';
import { mount, shallow } from 'enzyme';
import {expect} from 'chai';

import {AppTemplate} from "./../template/App.template.jsx";
import defaultStyles from "./../styles/default.js";

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
/*import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';

import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();*/

if (Meteor.isClient){

  describe('AppTemplate : ([Components...]) => Component (App.template.jsx)', function(){
	
	before(function () {

		App = AppTemplate()
		wrapper = mount(
				<MuiThemeProvider>
					  <App  
							styles={{container : {color : "testColor"}}}
							text = {{title : "test title"}}
						/>
			  </MuiThemeProvider>
			); 
	  });
				  
	describe('Return expected DOM tree', function(){
	  it('Class name of root div tag is "container"', function(){
		  expect(wrapper.first().hasClass('container')).to.be.true;
	  });
	  it('Has a header tag', function(){
		  expect(wrapper.find('header')).to.have.length(1);
	  });
	});
		  
	describe("text and styles are set correctly", function(){
		
		it('DOM elements ids match with default styles keys', function(){  			
			for (let nodeName in defaultStyles){
				expect(wrapper.find('#app-'+nodeName).exists()).to.be.true;
			} 
		  });
			
	 	 it('Styles provided via props.styles are correctly applied', function(){  
			 expect(wrapper.find('#app-container').props().style.color).to.equal("testColor");
		  });
		  /*it('Texts provided via props.text are correctly applied', function(){  
			 expect(wrapper.find('#app-title').get(0).innerHTML).to.equal("test title");
		  });*/
	});
		  

		 
	  
  });

}
    