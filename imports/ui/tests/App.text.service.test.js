
import { Meteor } from 'meteor/meteor';
import React from 'react';
import chai  from 'chai';
import { mount, shallow } from 'enzyme';
import {expect} from 'chai';


import {AppTextService} from "./../services/App.text.service.jsx";
import AppText from "./../text/index.js";



if (Meteor.isServer){


/*****************************************************************************************/
/****BLANK TEXT SERVICE TESTS - (App.text.service.js)*/
/*****************************************************************************************/

  describe('AppTextService : (Component, Text) => @Component (App.text.service.jsx)', function(){
	 before(function () {
		class _MockComponent extends React.Component{	 
			render() {
				return (<div>Fake Component</div>);
			}
		};
		MockComponent = _MockComponent
		WrapperComponent = AppTextService(MockComponent, AppText);
		wrapper = shallow(<WrapperComponent />);
	});
					  			  
	describe('Return expected object', function(){
		
	  it("Return object with props.text object corresponding to default language", function(){  
		  //console.log(wrapper)
		   expect(wrapper.props().text).to.not.be.undefined;
		  
		  for (var key in AppText.en){
			   expect(wrapper.props().text[key]).to.not.be.undefined;
			   expect(wrapper.props().text[key]).to.equal(AppText.en[key]);
		   }	  
	  });
	  it("Has a setLanguage() props", function(){  
		   expect(wrapper.props().setLanguage).to.not.be.undefined;
	  });
		
	});
	describe('Send new text when setLanguage is triggered with a known language', function(){
	  
	  it("Have an english version", function(){  
		   wrapper.props().setLanguage('en')
		    for (var key in AppText.en){
			   expect(wrapper.props().text[key]).to.not.be.undefined;
			   expect(wrapper.props().text[key]).to.equal(AppText.en[key]);
		   }
	  });
	  it("Have a french version", function(){  
		   wrapper.props().setLanguage('fr')
		    for (var key in AppText.en){
			   expect(wrapper.props().text[key]).to.not.be.undefined;
			   expect(wrapper.props().text[key]).to.equal(AppText.fr[key]);
		   }
	  });
		
	});
	  
  });		

}
