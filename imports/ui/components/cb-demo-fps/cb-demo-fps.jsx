
// REACT DEPENDENCIES
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { render } from 'react-dom';

// COMPONENT LAYERS
import Template from "./template/cb-demo-fps.template.jsx";
import Api from "./api/cb-demo-fps.api.jsx";
import Styles from "./services/cb-demo-fps.styles.service.jsx";
import Texts from "./services/cb-demo-fps.text.service.jsx";

// COMPONENT STATIC DATA
import stylesDefault from "./styles/cb-demo-fps.styles.default.js";
import stylesOptions from "./styles/cb-demo-fps.styles-options.default.js";
import computeStyles from "./styles/cb-demo-fps.compute-styles.js";
import texts from "./text/cb-demo-fps.text.js";

export default function CbDemoFps(){
	@Styles(computeStyles, stylesDefault, stylesOptions)
	@Api()
	@Texts(texts)
	@Template()
	class CbDemoFps_Component {}
	return CbDemoFps_Component
}  
