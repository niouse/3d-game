
import { Meteor } from 'meteor/meteor';
import React from 'react';
import chai  from 'chai';
import { mount, shallow } from 'enzyme';
import {expect} from 'chai';

/*import jsdom from 'jsdom'
const doc = jsdom.jsdom('<!doctype html><html><body></body></html>')
global.document = doc
global.window = doc.defaultView*/

import defaultStyles from "./../styles/default.js"
import {AppStylesOptionsService} from "./../services/App.styles-options.service.jsx";


if (Meteor.isClient){


/*****************************************************************************************/
/****STYLES TESTS - (App.styles.jsx)*/
/*****************************************************************************************/

  describe('AppStylesOptionsService : (Component) => @Component (App.styles-options.service.jsx)', function(){
	  
	 before(function () {  
		 
		 class MockComponent extends React.Component{
			 constructor(props){
				 super(props)
				 this.state={test:false}
			 }		
			componentDidMount(){
				this.props.stylesOptionsObs.subscribe((x)=>{
					this.setState({
						test : x
					})
				})
			}		 
			render() {
				return (<div>Fake Component</div>);
			}
		};			
		_MockComponent = MockComponent	
		WrapperComponent = AppStylesOptionsService(_MockComponent);
		wrapper = mount(<WrapperComponent testprop="testprop"/>);
	});
					  			  
	describe('Return expected object', function(){
			
	  it("Child component is correctly mounted", function(){  
		   expect(wrapper.find(_MockComponent)).to.have.length(1)
	  });
	  it("Transmit props from parent to child", function(){  
		   expect(wrapper.props().testprop).to.not.be.undefined;
		   expect(wrapper.find(_MockComponent).props().testprop).to.not.be.undefined;
	  });
	  it("Transmit styles-options object to child, and observable and subject", function(){  
		   expect(wrapper.find(_MockComponent).props().stylesOptions).to.not.be.undefined;
		  expect(wrapper.find(_MockComponent).props().stylesOptionsNext).to.not.be.undefined;
		  expect(wrapper.find(_MockComponent).props().stylesOptionsObs).to.not.be.undefined;
	  });

	});
	
	describe('Bidirectionnal communication with observable and subject is working', function(){
	  it("styles-options are computed correctly", function(){ 
		  let stylesOptions = wrapper.find(_MockComponent).props().stylesOptions
		   expect(stylesOptions.screenHeight).to.not.be.undefined;
		   expect(stylesOptions.screenWidth).to.not.be.undefined;
		   expect(stylesOptions.device).to.be.a('string');
		   expect(stylesOptions.screenHeight).to.be.a('number');
		   expect(stylesOptions.screenWidth).to.be.a('number');
	  });
		
	  it("Send new stylesOptions when props.stylesOptionsNext() is triggered", function(){  
		   let temp = wrapper.find(_MockComponent).get(0)
		   let stylesOptions = wrapper.find(_MockComponent).props().stylesOptions
		   
		   expect(temp.state.test).to.equal(false)
		   wrapper.find(_MockComponent).props().stylesOptionsNext()
		   expect(temp.state.test).to.be.an('object');
		   expect(temp.state.test).to.deep.equal(stylesOptions)
	  });
		
	  
	});
	  
  });		

}

    