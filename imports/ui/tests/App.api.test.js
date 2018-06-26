

import { Meteor } from 'meteor/meteor';

import React from 'react';
import chai  from 'chai';
import { mount, shallow } from 'enzyme';
import {expect} from 'chai';

import {AppApi} from "./../api/App.api.jsx";


if (Meteor.isServer){

/*****************************************************************************************/
/****API TESTS - (App.api.jsx)*/
/*****************************************************************************************/

  describe('AppApi (Component) => (@Component) (App.api.jsx)', function(){
						 
	beforeEach(function () {
		class _MockComponent extends React.Component{	 
			render() {
				return (<div>Fake Component</div>);
			}
		};
		MockComponent = _MockComponent
		WrapperComponent = AppApi(MockComponent);
		wrapper = shallow(<WrapperComponent />);
	});
						  
	describe('Return object with expected methods', function(){
		
	 /* it('Has a "expected" method', function(){  
		  expect(wrapper.props().expected).to.not.be.undefined;
	  });*/

	});
	  
  });


}
    