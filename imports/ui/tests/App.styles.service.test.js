
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
import {AppStylesService} from "./../services/App.styles.service.jsx";


if (Meteor.isServer){


/*****************************************************************************************/
/****STYLES TESTS - (App.styles.jsx)*/
/*****************************************************************************************/

  describe('AppStylesService : (Component, defaultStyles) => @Component (App.styles.service.jsx)', function(){
	 before(function () {
		class _MockComponent extends React.Component{	 
			render() {
				return (<div>Fake Component</div>);
			}
		};
		MockComponent = _MockComponent
		WrapperComponent = AppStylesService(MockComponent, defaultStyles);
		wrapper = shallow(<WrapperComponent />);
	});
					  			  
	describe('Return expected object', function(){
		
	  it("Return object with props.styles object, with at least a \"container\" key", function(){  
		   expect(wrapper.props().styles).to.not.be.undefined;
		   expect(wrapper.props().styles.container).to.not.be.undefined;
	  });
	  
		
	  it('Overwrite styles with user provided custom styles', function(){  
		  wrapper = shallow(
			  <WrapperComponent 
			  		containerStyle={{color : "testColor"}}
			  		titleStyle={{color : "testColor"}}
			  />
		  );
		  expect(wrapper.props().styles.container.color).to.equal("testColor");
		  expect(wrapper.props().styles.title.color).to.equal("testColor");
	  });
	});
	  
  });		

}

    