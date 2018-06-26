
// REACT DEPENDENCIES
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { render } from 'react-dom';

// COMPONENT LAYERS
import Template from "./template/cb-demo-commands.template.jsx";
import Api from "./api/cb-demo-commands.api.jsx";
import Styles from "./services/cb-demo-commands.styles.service.jsx";
import Texts from "./services/cb-demo-commands.text.service.jsx";

// COMPONENT STATIC DATA
import stylesDefault from "./styles/cb-demo-commands.styles.default.js";
import stylesOptions from "./styles/cb-demo-commands.styles-options.default.js";
import computeStyles from "./styles/cb-demo-commands.compute-styles.js";
import texts from "./text/cb-demo-commands.text.js";

export default function CbDemoCommands(){
	return (wrappedComponent)=>{
		@Styles(computeStyles, stylesDefault, stylesOptions)
		@Texts(texts)
		@Api()
		@Template()
		class CbDemoCommands_Component {}
		return CbDemoCommands_Component
	}
}  
