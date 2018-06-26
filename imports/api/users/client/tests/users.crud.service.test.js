import { Meteor } from 'meteor/meteor';

import React from 'react';
import chai  from 'chai';
import { mount, shallow } from 'enzyme';
import {expect} from 'chai';

import {UsersCrudService} from "./../users.crud.service.jsx";


if (Meteor.isClient){

  describe('UsersCrudService (Component) => (@Component) (users.crud.service.jsx)', function(){
						 
	beforeEach(function () {
		class _MockComponent extends React.Component{	 
			render() {
				return (<div>Fake Component</div>);
			}
		};
		MockComponent = _MockComponent
		WrapperComponent = UsersCrudService(MockComponent);
		wrapper = mount(<WrapperComponent />);
	});
						  
	describe('Return object with expected methods', function(){
	 it('Has a "createUser" method', function(){  
		  expect(wrapper.find(MockComponent).props().createUser).to.not.be.undefined;
	  });	
	  it('Has a "submitUser" method', function(){  
		  expect(wrapper.find(MockComponent).props().submitUser).to.not.be.undefined;
	  });
	});
	describe('createUser: (options, callback)=>{}', function(){
	 it('Has a "createUser" method', function(done){
		 let test = false
		 let testUser = {
			 username : "test",
			 email : "test@test",
			 password : "testPassword"
		 }
		 wrapper.find(MockComponent).props().createUser(testUser, (err, res)=>{
			 if(!err){ test = true}
			 expect(test).to.be.true;
			 done()
		 })
		 
	  });	
	});
	  
  });


}
    