

import { Meteor } from 'meteor/meteor';
import React from 'react';
import chai  from 'chai';
import { mount, shallow } from 'enzyme';
import {expect} from 'chai';

import Texts from "./../services/cb-demo-fps.text.service.jsx";
import texts from "./../text/cb-demo-fps.text.js";

if (Meteor.isServer) {

    describe('@Texts (cb-demo-fps.text.service.jsx)', function() {
        before(function() {
            class _MockComponent extends React.Component {
                render() {
                    return (<div>Fake Component</div>);
                }
            };
            MockComponent = _MockComponent
            WrapperComponent = Texts(texts)(MockComponent);
            wrapper = shallow(<WrapperComponent />);
        });

        describe('Return expected object', function() {

            it("Return object with props.text object corresponding to default language", function() {
                //console.log(wrapper)
                expect(wrapper.props().text).to.not.be.undefined;

                for (var key in texts.en) {
                    expect(wrapper.props().text[key]).to.not.be.undefined;
                    expect(wrapper.props().text[key]).to.equal(texts.en[key]);
                }

            });
            it("Has a setLanguage() props", function() {
                expect(wrapper.props().setLanguage).to.not.be.undefined;
            });

        });
        describe('Send new text when setLanguage is triggered with a known language', function() {

            it("Have an english version", function() {
                wrapper.props().setLanguage('en')
                for (var key in texts.en) {
                    expect(wrapper.props().text[key]).to.not.be.undefined;
                    expect(wrapper.props().text[key]).to.equal(texts.en[key]);
                }
            });
            it("Have a french version", function() {
                wrapper.props().setLanguage('fr')
                for (var key in texts.en) {
                    expect(wrapper.props().text[key]).to.not.be.undefined;
                    expect(wrapper.props().text[key]).to.equal(texts.fr[key]);
                }
            });

        });

    });
}


