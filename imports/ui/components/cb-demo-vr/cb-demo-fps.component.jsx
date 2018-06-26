
// REACT DEPENDENCIES
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { render } from 'react-dom';

// COMPONENT LAYERS
import Template from "./template/cb-demo-fps.template.jsx";
import Api from "./api/cb-demo-fps.api3.jsx";
import Styles from "./services/cb-demo-fps.styles.service.jsx";
import Texts from "./services/cb-demo-fps.text.service.jsx";

// COMPONENT STATIC DATA
import stylesDefault from "./styles/cb-demo-fps.styles.default.js";
import stylesOptions from "./styles/cb-demo-fps.styles-options.default.js";
import computeStyles from "./styles/cb-demo-fps.compute-styles.js";
import texts from "./text/cb-demo-fps.text.js";

import CubesDataService from "/imports/api/cubes/client/cubes.data.service.jsx";

@CubesDataService()
@Styles(computeStyles, stylesDefault, stylesOptions)
@Api()
@Texts(texts)
@Template()
class CbDemoFps_Component {}

export default CbDemoFps_Component

