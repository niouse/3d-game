import React, { Component } from 'react';

// MATERIAL UI 
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import lightBaseTheme from 'material-ui/styles/baseThemes/lightBaseTheme.js'
import materialTrb from "./themes/materialui.trb.js"

// COMPOENENTS LAYERS
import {AppTemplate} from "./template/App.template.jsx";
import {AppApi} from "./api/App.api.jsx";

// STYLES
import defaultStyles from "./styles/default.js"

// APP SERVICES
import {AppStylesOptionsService} from "./services/App.styles-options.service.jsx";
import {AppStylesService} from "./services/App.styles.service.jsx";
import {AppAccessService} from "./services/App.access.service.jsx";

// COLLECTIONS SERVICES
import {UsersService} from "./../api/users/client/users.service.jsx";
import {UsersCrudService} from "./../api/users/client/users.crud.service.jsx";

// APP COMPOENENTS
import CbDemoFps from "./components/cb-demo-fps/cb-demo-fps.component.jsx";
import CbDemoVr from "./components/cb-demo-vr/cb-demo-fps.component.jsx";
import CbDemoCommands from "./components/cb-demo-commands/cb-demo-commands.component.jsx"

@CbDemoCommands()
class $CbDemoCommands{}


// BUILD APP ______________________________________________________________________*/
let App;
App = AppTemplate(CbDemoFps, CbDemoVr, $CbDemoCommands) //build template
App = AppApi(App) //Inject API
App = AppStylesService(App, defaultStyles) // Inject styles service
App = AppStylesOptionsService(App) // Inject styles-options service


export default class AppContainer extends Component {
	constructor(props){
		super(props);
	}
	render() {
		return  (
			<MuiThemeProvider  muiTheme={getMuiTheme(materialTrb)}>
				<App
					{...this.props}
				/>
			</MuiThemeProvider>
		);
	}
}
    