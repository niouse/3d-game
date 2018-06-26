import { Meteor } from 'meteor/meteor';

import React from 'react';
import chai  from 'chai';
import { mount, shallow } from 'enzyme';
import {expect} from 'chai';

import {UsersService} from "./../users.service.jsx";


if (Meteor.isClient){

  describe('UsersService (Component) => (@Component) (users.service.jsx)', function(){
						 
	beforeEach(function () {
		class _MockComponent extends React.Component{	 
			render() {
				return (<div>Fake Component</div>);
			}
		};
		MockComponent = _MockComponent
		WrapperComponent = UsersService(MockComponent);
		wrapper = shallow(<WrapperComponent />);
	});
						  
	describe('Return object with expected methods', function(){
	 it('Has a "user" property', function(){  
		  expect(wrapper.props().user).to.not.be.undefined;
	  });	
	});
	  
  });


}
    